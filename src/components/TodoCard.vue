<template>
  <div>
    <input
      :checked="todo.complete"
      @change="changeComplete(todo.id)"
      type="checkbox"
      :id="todo.id"
    />
    <label :for="todo.id"> {{ todo.title }} </label>
    <button @click="deleteItem(todo.id)">刪除</button>
  </div>
</template>

<script>
export default {
  props: {
    todoProps: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      todo: JSON.parse(JSON.stringify(this.todoProps)),
    };
  },
  methods: {
    changeComplete(id) {
      this.$store.dispatch("toggleComplete", id);
    },
    deleteItem(id) {
      this.$store.dispatch("deleteItem", id);
    },
  },
};
</script>

<style>
</style>