<template>
  <button :class="classes" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
// prop for button types
// primary, secondary, danger, warning, success, info, light, dark
const props = defineProps<{
  type:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "light"
    | "dark";
}>();

const backgroundColors = {
  primary: {
    initial: "bg-teal-600",
    hover: "bg-teal-700",
  },
  secondary: {
    initial: "bg-gray-500",
    hover: "bg-gray-600",
  },
  danger: {
    initial: "bg-red-600",
    hover: "bg-red-700",
  },
  warning: {
    initial: "bg-yellow-600",
    hover: "bg-yellow-700",
  },
  success: {
    initial: "bg-green-600",
    hover: "bg-green-700",
  },
  info: {
    initial: "bg-blue-600",
    hover: "bg-blue-700",
  },
  light: {
    initial: "bg-gray-300",
    hover: "bg-gray-400",
  },
  dark: {
    initial: "bg-gray-800",
    hover: "bg-gray-900",
  },
};

const classes = computed(() => {
  return [
    "px-4",
    "py-2",
    "rounded",
    "text-white",
    "transition-colors",
    "duration-200",
    backgroundColors[props.type].initial,
    `hover:${backgroundColors[props.type].hover}`,
  ];
});
</script>
