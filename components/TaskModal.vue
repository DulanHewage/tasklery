<template>
  <Modal
    @close="emit('close')"
    :task="props.task"
    :header="props.task.title"
    :subHeader="'in list ' + columnTitle"
  >
    <QuillEditor theme="snow" toolbar="essential" />
  </Modal>
</template>

<script setup lang="ts">
import type { Task } from "@/types";
import { QuillEditor } from "@vueup/vue-quill";
import { useTasksStore } from "~/store/tasks";

const { getColumnByTaskId } = useTasksStore();
const columnTitle = computed(() => getColumnByTaskId(props.task.id)?.title);

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "close", payload: void): void;
}>();
</script>

<style lang="scss" scoped>
:deep(.ql-toolbar) {
  @apply rounded rounded-b-none;
}
:deep(.ql-container) {
  @apply rounded rounded-t-none h-40;
}
</style>
