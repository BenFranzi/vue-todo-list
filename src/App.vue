<template>
  <div id="app">
    <h1 class="text-6xl text-red-600">TODO</h1>
    <Button class="border border-blue-200 bg-blue-300 py-2 px-3 rounded text-gray-800" @click="showAlert">Click Me!</Button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showAlert() {
      alert('Sup sexy')
    }
  }
}
</script>
