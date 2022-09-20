export default {
  toggleComplete(context, id) {
    this.commit("updateComplete", { id });
  },
  createItem(context, title) {
    const todo = {
      title,
      complete: false,
      id: new Date().getTime()
    };

    this.commit("addItem", { todo });
  },
  deleteItem(context, id) {
    this.commit("removeItem", { id });
  }
};
