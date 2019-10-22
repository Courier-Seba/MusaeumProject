<template>
  <div class="container">
    <div v-for="post in postList" :key="post.id">
      <forum-post-overview
        :id="post.id"
        :title="post.title"
        :content="post.content"
      >
      </forum-post-overview>
    </div>
  </div>
</template>

<script>
import ForumPostOverview from "@/components/for-layout/ForumPostOverview";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ForumView",
  components: {
    ForumPostOverview
  },
  methods: {
    ...mapActions(["getLastestPosts"])
  },
  computed: {
    ...mapGetters(["postList"])
  },
  created() {
    this.getLastestPosts();
  }
};
</script>
