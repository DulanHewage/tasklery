<template>
  <div
    :title="task.createdAt.toLocaleDateString()"
    class="task bg-white p-2 mb-2 mt-2 rounded shadow-sm max-w-[250px]"
  >
    <span>{{ task.title }}</span>
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
