<!-- <template>
  <div class="home">
    <h3>{{ message }}</h3>
    <ul v-for="(item, index) in userList" :key="index">
      <li>{{item.id}}, {{ item.name}}</li>
    </ul>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue';
import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  computed:{
      message(){
        return this.$store.state.message
      },
      ...mapState({
        // message: state => state.message,
        userList: state => state.userList
      })
    }
}
</script> -->
<template>
  <div class="home">
    <div class="container">
      <label for="inputTodo">請輸入待辦事項：</label>
      <input v-model.trim="inputItem" id="inputTodo" type="text" />
      <button @click="createItem" type="button">加入</button>
      <div class="inputs">
        <input type="radio" id="all" value="all" v-model="todoStatus" />
        <label for="all">All</label>
        <input
          type="radio"
          id="complete"
          value="complete"
          v-model="todoStatus"
        />
        <label for="complete">Complete</label>
        <input
          type="radio"
          id="incomplete"
          value="incomplete"
          v-model="todoStatus"
        />
        <label for="incomplete">Incomplete</label>
      </div>
      <TodoCard
        :todoProps="todo"
        v-for="todo in todos"
        :key="todo.id"
      ></TodoCard>
      <p>備注欄：</p>
      <p>{{ note }}</p>
    </div>
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard.vue";
import { mapGetters } from "vuex";

export default {
  components: { TodoCard },
  data() {
    return {
      todoStatus: "all",
      inputItem: "",
    };
  },
  computed: {
    ...mapGetters({ allTodos: "getTodos", note: "Note/getNote" }),
    // 以上寫法即等於
    // ...mapGetters(['getTodos']),
    // allTodos() {
    //   return this.getTodos;
    // },

    // 另外，因為 Note/index.js 設定了 namespaced
    // 因此以上必須寫 Note/getNote，不能寫 getNote

    todos() {
      let result;
      switch (this.todoStatus) {
        case "all":
          result = this.allTodos;
          break;
        case "complete":
          result = this.allTodos.filter((todo) => todo.complete);
          break;
        case "incomplete":
          result = this.allTodos.filter((todo) => !todo.complete);
          break;
        // no default
      }
      return result;
    },
  },
  methods: {
    createItem() {
      this.$store.dispatch("createItem", this.inputItem);
      this.inputItem = "";
    },
  },
};
</script>
<style lang="scss">
.inputs {
  margin-bottom: 30px;
}
.container {
  width: 500px;
  margin: 0 auto;
}
</style>
