<template>
  <div class="flex flex-col">
    <div class="flex justify-center">
      <h1 class="text-6xl text-red-600">ToDo List</h1>
    </div>
    <div class="flex justify-center">
      <TodoList :todoList="todoList" />
    </div>
    <div class="flex justify-center">
      <Button class="border border-blue-200 bg-blue-300 py-2 px-3 rounded text-gray-800" @click="showAlert">Click Me!</Button>
    </div>
  </div>
</template>

<script>
import TodoList from "./Components/TodoList";

export default {
  name: 'App',
  data() {
    return {
      todoList: [
        { id: 1, description: "Do Ben 👀" },
        { id: 2, description: "Do Todo List" }
      ]
    }
  },
  methods: {
    showAlert() {
      alert('Sup sexy')
    }
  },
  created() {
    // TODO: fetch todo list here!
  },
  components: {
    TodoList
  }
}
</script>
