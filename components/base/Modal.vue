<template>
  <div
    class="task-modal-overlay bg-black bg-opacity-20 absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center"
    @click.self="emit('close')"
  >
    <div
      class="task-modal-card bg-white shadow max-w-[760px] w-[320px] sm:w-[640px] md:w-[760px] py-5 px-6 rounded"
    >
      <div class="header flex justify-between items-center">
        <div
          class="header-left flex items-center"
          :class="{ hidden: !props.header }"
        >
          <Icon
            :name="props.headerAppendIcon"
            size="20px"
            data-test="modal-header-append-icon"
          />
          <div class="text-xl ml-2 font-bold" data-test="modal-header">
            {{ props.header }}
          </div>
        </div>
        <Icon
          :name="props.headerPrependIcon"
          @click="emit('close')"
          class="cursor-pointer"
          size="20px"
          data-test="modal-header-prepend-icon"
        />
      </div>

      <div
        class="text-sm ml-7"
        v-if="props.subHeader"
        data-test="modal-subheader"
      >
        {{ props.subHeader }}
      </div>
      <div class="body pt-2" data-test="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  header: string;
  headerPrependIcon?: string;
  headerAppendIcon?: string;
  subHeader?: string;
}
const props = withDefaults(defineProps<Props>(), {
  header: undefined,
  headerAppendIcon: "mdi:card-text-outline",
  headerPrependIcon: "mdi:close",
});
const emit = defineEmits(["close"]);
</script>
