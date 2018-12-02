<template>
  <div>
    <form>
      <button @click.prevent="addTodo();">ADD TODO</button>
      <button @click.prevent="removeTodo();">DELETE FINISHED TODOS</button>
      <p>
        input:
        <input type="text" v-model="newTodo">
      </p>
      <p>todo: {{ newTodo }}</p>
      <p>Todo Count: {{ remains }}/{{ todos.length }}</p>
    </form>
    <div class="todo-list">
      <label
        class="todo-list__item"
        v-for="(todo, index) in todos"
        :key="index"
        v-bind:class="{ 'todo-list__item--checked': todo.done }"
      >
        <input type="checkbox" v-model="todo.done">
        <input type="checkbox" v-model="todo.editing">
        <input
          v-if="todo.editing"
          v-model="todo.text"
          @keyup.enter.prevent="todo.editing = !todo.editing;"
        >
        <span v-else>{{ todo.text }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data: function() {
    return {
      msg: "Welcome to Your Vue.js App",
      todos: [
        { text: "1日目: ジョギング30分", done: false, editing: false },
        { text: "2日目: スクワット10回3セット(朝昼晩)・ジョギング30分", done: false, editing: false },
        { text: "3日目: スクワット20回3セット(朝昼晩)・ジョギング30分", done: false, editing: false },
        { text: "4日目: スクワット20回3セット(朝昼晩)・ジョギング40分", done: true, editing: false }
      ],
      newTodo: ""
    };
  },
  methods: {
    addTodo: function(event) {
      let text = this.newTodo && this.newTodo.trim(),
        day = this.todos.length;
      if (!text) {
        return;
      }
      this.todos.push({
        day: day + 1,
        text: day + "日目: " + text,
        done: false,
        editing: false
      });
      this.newTodo = "";
    },
    removeTodo: function(event) {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1);
      }
    }
  },
  computed: {
    remains: function() {
      var count = 0;
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].done) {
          count++;
        }
      }
      return count;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}

.todo-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;

  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>
