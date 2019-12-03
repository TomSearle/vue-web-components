<template>
  <div class="container">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Add an item" v-model="input" />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" @click="add" type="button">Get doin'!</button>
      </div>
    </div>
    <div class="card mb-1" v-for="todo in todos">
      <div class="card-body text-left">{{todo}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    input: "",
    todos: []
  }),
  methods: {
    add() {
      this.todos.push(this.input);
      this.input = "";
    }
  }
};
</script>