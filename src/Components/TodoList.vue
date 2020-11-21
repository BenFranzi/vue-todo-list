<template>
  <ul class="flex flex-col lg:w-1/2">
    <TodoItem v-for="item in todoList" :key="item.id">
      <template v-slot:id>{{ item.id }}</template>
      <template v-slot:description>{{ item.description }}</template>
    </TodoItem>
  </ul>
</template>

<script>
import TodoItem from "@/Components/TodoItem";

export default {
  name: "TodoList",
  props: {
    todoList: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoItem
  }
}
</script>
