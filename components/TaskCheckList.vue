<template>
  <BaseTaskSubTitle
    subtitle="Checklist"
    icon="mdi:checkbox-marked-circle-outline"
  >
    <BaseButton type="secondary" size="sm">Delete</BaseButton>
  </BaseTaskSubTitle>
  <BaseProgressBar :progress="10" />
  <div class="mt-2">
    <div class="flex items-center">
      <Icon name="mdi:checkbox-blank-circle-outline" size="18px" />
      <div class="ml-2">Add an item</div>
    </div>
  </div>
</template>
