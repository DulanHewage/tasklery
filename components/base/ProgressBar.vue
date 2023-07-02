<template>
  <div class="mt-2 flex items-center">
    <span class="mr-2 text-sm" data-test="progress-value"
      >{{ currentProgress }}%</span
    >
    <div class="relative w-full">
      <div class="bg-slate-300 w-full h-1 rounded"></div>
      <div
        class="bg-teal-600 h-1 rounded absolute top-0 left-0"
        :style="{ width: `${currentProgress}%` }"
        data-test="progress-bar"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// define progress prop with valdation
const props = defineProps({
  progress: {
    type: Number,
    required: false,
    validator: (val: number) => val >= 0 && val <= 100,
    default: 0,
  },
});

const currentProgress = computed(() => {
  return props.progress >= 100 ? 100 : props.progress < 0 ? 0 : props.progress;
});
</script>
