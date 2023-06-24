<template>
  <BaseModal
    @close="emit('close')"
    :task="props.task"
    :header="props.task.title"
    :subHeader="'in list ' + columnTitle"
  >
    <BaseTaskSubTitle subtitle="Description" icon="mdi:format-align-left" />
    <div
      class="mt-2 mb-4 description"
      :class="{
        'bg-slate-200 h-5 flex items-end px-3 py-8 rounded text-gray-600 cursor-pointer':
          isInitialDesc,
      }"
      v-html="desc"
      @click="toggleEditor"
      v-if="!isEditMode"
    ></div>
    <div class="editor" v-else="isEditMode">
      <QuillEditor
        theme="snow"
        toolbar="essential"
        content-type="html"
        v-model:content="desc"
      />
      <div class="mt-2">
        <BaseButton type="primary" @click="saveDescription" class="mr-2"
          >Save</BaseButton
        >
        <BaseButton type="secondary" @click="cancelEditing">Cancel</BaseButton>
      </div>
    </div>
    <BaseTaskSubTitle subtitle="Activity" icon="mdi:format-list-triangle" />
    <TaskCheckList :task="props.task" />
  </BaseModal>
</template>
<script setup lang="ts">
import type { Task } from "@/types";
import { QuillEditor } from "@vueup/vue-quill";
import { useTasksStore } from "~/store/tasks";

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: "close", payload: void): void;
}>();

const { getColumnByTaskId } = useTasksStore();
const editorPlaceholder = "<h4>Add a more detailed description...</h4>";
const desc = ref<string | undefined>(editorPlaceholder);
const isEditMode = ref(false);

const columnTitle = computed(() => getColumnByTaskId(props.task.id)?.title);
const isInitialDesc = computed(() => {
  return desc.value === editorPlaceholder;
});

const toggleEditor = () => {
  isEditMode.value = !isEditMode.value;
  if (!isInitialDesc) {
    return;
  }
  if (isEditMode.value) {
    desc.value = "";
  } else {
    desc.value = editorPlaceholder;
  }
};

const saveDescription = () => {
  if (!desc.value) {
    isEditMode.value = false;
    desc.value = editorPlaceholder;
    return;
  }
  if (isInitialDesc) {
    isEditMode.value = false;
    return;
  }
  isEditMode.value = false;
  useTasksStore().updateTask(props.task.id, {
    ...props.task,
    description: desc.value,
  });
};

const cancelEditing = () => {
  isEditMode.value = false;
  desc.value = props.task.description;
};
</script>

<style lang="scss" scoped>
:deep(.ql-toolbar) {
  @apply rounded rounded-b-none;
}
:deep(.ql-container) {
  @apply rounded rounded-t-none h-40;
}
.description {
  &:deep(h1) {
    @apply text-2xl;
  }
  &:deep(h2) {
    @apply text-xl;
  }
  &:deep(h3) {
    @apply text-lg;
  }
  &:deep(h4) {
    @apply text-base;
  }
  &:deep(h5) {
    @apply text-sm;
  }
  &:deep(h6) {
    @apply text-xs;
  }
  &:deep(p) {
    @apply text-base;
  }
  &:deep(ul) {
    @apply list-disc list-inside;
  }
  &:deep(ol) {
    @apply list-decimal list-inside;
  }
  &:deep(li) {
    @apply text-base;
  }
  &:deep(a) {
    @apply text-blue-500 underline;
  }
  &:deep(blockquote) {
    @apply border-l-4 border-gray-300 pl-2;
  }
  &:deep(pre) {
    @apply bg-gray-100 p-2 rounded;
  }
  &:deep(code) {
    @apply bg-gray-100 p-1 rounded;
  }
}
</style>
