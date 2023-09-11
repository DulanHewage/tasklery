<template>
  <BaseTaskSubTitle
    subtitle="Checklist"
    icon="mdi:checkbox-marked-circle-outline"
  >
    <BaseButton type="secondary" size="sm">Delete</BaseButton>
  </BaseTaskSubTitle>
  <BaseProgressBar :progress="10" />
  <div class="mt-2">
    <div class="flex items-start flex-col">
      <TaskCheckListItem />
      <TaskCheckListItem />
      <BaseButton type="secondary" size="sm">Add an item</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
