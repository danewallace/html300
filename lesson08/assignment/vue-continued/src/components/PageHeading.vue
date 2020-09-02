<template>
  <!-- Named slot with default value -->
  <div class="page-heading">
    <slot name="page-title">Default title</slot>
  </div>
</template>

<script>
export default {
  name: "page-heading",
};
</script>
