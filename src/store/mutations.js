export default {
  updateComplete(state, payload) {
    const target = state.todos.find((todo) => todo.id === payload.id);
    target.complete = !target.complete;
  },
  addItem(state, payload) {
    state.todos.push(payload.todo);
  },
  removeItem(state, payload) {
    const targetidx = state.todos.findIndex((todo) => todo.id === payload.id);
    state.todos.splice(targetidx, 1);
  }
};
