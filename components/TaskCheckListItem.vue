<template>
  <div class="flex items-center mb-2">
    <BaseCheckbox v-model="checked" />
    <div class="text-sm font-normal ml-2" :class="{ 'line-through': checked }">
      complete tood
    </div>
  </div>
</template>

<script setup>
const checked = ref(true);
</script>
