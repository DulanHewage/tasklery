<template>
  <div
    :title="task.createdAt.toLocaleDateString()"
    class="task flex justify-between items-center bg-white p-2 mb-2 mt-2 rounded shadow-sm max-w-[250px] cursor-pointer group"
  >
    <span>{{ task.title }}</span>
    <div
      class="opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"
    >
      <Icon name="mdi:pencil-outline" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task, ID } from "@/types";
const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "delete", payload: ID): void;
}>();

const deleteTask = () => emit("delete", props.task.id);
</script>
