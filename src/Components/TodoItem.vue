<template>
  <li class="flex">
    <div class="justify-start item-id">
      <slot name="id"></slot>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.item-id {
  width: 1em;
}
</style>
