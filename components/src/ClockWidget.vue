<template>
  <div class="container">
    <p class="lead">The time is {{time}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    now: null
  }),
  computed: {
    time: function() {
      if (this.now == null) return "";
      return `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`;
    }
  },
  created() {
    setInterval(() => (this.now = new Date()), 1000);
  }
};
</script>