<template>
  <div class="container">
    <div v-for="post in postList" :key="post.id">
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumView",
};
</script>
