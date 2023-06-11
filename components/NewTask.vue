<template>
  <div>
    <textarea
      v-model="title"
      @keydown.tab="createTask"
      @keyup.enter="createTask"
      class="focus:bg-white focus:shadow resize-none rounded w-full border-none outline-none p-2 hover:bg-slate-50 cursor-pointer"
      :class="{
        'h-10': !focused,
        'h-20': focused,
      }"
      @focus="focused = true"
      @blur="focused = false"
      :placeholder="!focused ? '+ Add a card' : 'Enter a title for this card'"
    >
    </textarea>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "@/types";
import { nanoid } from "nanoid";

const emit = defineEmits<{
  (e: "add", payload: Task): void;
}>();

const focused = ref(false);
const title = ref("");

function createTask(e: Event) {
  if (title.value.trim()) {
    e.preventDefault();
    emit("add", {
      id: nanoid(),
      title: title.value.trim(),
      createdAt: new Date(),
    } as Task);
  }

  title.value = "";
}
</script>
