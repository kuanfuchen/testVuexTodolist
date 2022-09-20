export default {
  // 當 namespaced 是 true 時，載入這裏的資料時，必須寫 'Note/...'
  namespaced: true,
  state: {
    note: "Dummy text"
  },
  actions: {
    createNote(context, note) {
      context.commit("setNote", note);
    }
  },
  mutations: {
    setNote(state, note) {
      state.note = note;
    }
  },
  getters: {
    getNote(state) {
      return state.note;
    }
  }
};
