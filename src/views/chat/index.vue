<template>
  <div class="chat-container">
    chat
  </div>
</template>

<script>
import getBlog from "@/api/blog";
export default {
  created() {
    getBlog().then((r) => {
      console.log(r);
    });
  },
};
</script>

<style>
</style>