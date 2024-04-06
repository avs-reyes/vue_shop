<script  setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-3">
        <h1 color="#0E0D0D" class="text-h2 title  ">/{{ title }}.</h1>


    <slot></slot>
  </div>
</template>

<style>


</style>
