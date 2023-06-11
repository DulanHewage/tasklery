<template>
  <div>
    <draggable
      v-model="columns"
      groups="columns"
      :animation="150"
      handle=".drag-handler"
      item-key="id"
      class="flex gap-4 overflow-x-auto items-start"
    >
      <template #item="{ element: column }: { element: Column }">
        <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header
            class="font-bold mb-4 flex items-center drag-handler cursor-move"
          >
            <span class="mb-1 mr-2"> ☰ </span>
            <span class="title">{{ column.title }}</span>
          </header>

          <draggable
            v-model="column.tasks"
            :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
            :animation="150"
            item-key="id"
          >
            <template #item="{ element: task }: { element: Task }">
              <div>
                <TrelloBoardTask :task="task" />
              </div>
            </template>
          </draggable>

          <footer>
            <NewTask @add="column.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggable>
  </div>
</template>
<script setup lang="ts">
import type { Column, Task } from "@/types";
import { nanoid } from "nanoid";
import draggable from "vuedraggable";

const alt = useKeyModifier("Alt");

const columns = ref<Column[]>([
  {
    id: nanoid(),
    title: "To do",
    tasks: [
      {
        id: nanoid(),
        title: "Task 1",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Task 2",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Task 3",
        createdAt: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    title: "In progress",
    tasks: [
      {
        id: nanoid(),
        title: "Task 4",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Task 5",
        createdAt: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    title: "Done",
    tasks: [
      {
        id: nanoid(),
        title: "Task 6",
        createdAt: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    title: "Done",
    tasks: [
      {
        id: nanoid(),
        title: "Task 6",
        createdAt: new Date(),
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.sortable {
  // &-chosen {
  //   background-color: red;
  // }
  &-drag {
    .task {
      transform: rotate(5deg);
    }
  }
  &-ghost {
    .task {
      position: relative;
      &:after {
        content: "";
        @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
      }
    }
  }
}
</style>
