import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import Note from "./Note/index";

export default createStore({
  state,// 所有在 store 裏的資料
  actions,
  // 負責觸發 mutations
  // 可處理非同步程式（e.g: 打 API）
  mutations,// 負責改變 state 裏的資料，只能同步。不要直接觸發mutations修改資料，謹守以actions
  // 觸發 mutations 修改資料為原則
  getters,// 像 computed 一樣，運算處理 state 資料
  modules: {
    Note
    // 按需求分拆 module
    // 每個 module 都有自己的state, actions, mutations, getters, modules
  }
});
