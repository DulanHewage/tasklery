<template>
  <div class="mt-2 flex items-center justify-between mb-2">
    <div>
      <Icon :name="props.icon" size="18px" class="mr-1" />
      <span class="text-l font-bold">{{ props.subtitle }}</span>
    </div>
    <div class="actions">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  subtitle: string;
  icon: string;
}
const props = defineProps<Props>();
</script>
