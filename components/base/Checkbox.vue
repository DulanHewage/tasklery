<template>
  <div
    class="flex items-center justify-center w-5 h-5 relative"
    :aria-checked="inputVal"
  >
    <input
      type="checkbox"
      class="opacity-0 z-10 w-full h-full cursor-pointer absolute"
      v-model="inputVal"
      @change="onChange"
    />
    <div class="flex items-center justify-center z-0">
      <Icon
        name="mdi:check-circle"
        size="20px"
        v-if="inputVal"
        class="text-teal-600"
      />
      <Icon
        name="mdi:checkbox-blank-circle"
        size="20px"
        class="text-teal-600"
        v-else
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const inputVal = ref(false);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  inputVal.value = props.modelValue;
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
};
</script>
