<template>
  <div>
    <h1>This is a message from vue:</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    props: ["msg"]
  };
</script>