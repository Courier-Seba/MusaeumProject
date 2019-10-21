<template>
  <div class="container">
    <h1>asdf</h1>
    <div v-for="post in postList" :key="post.id">
      <forum-post-overview
        :id="post.id"
        :title="post.title"
        :body="post.content"
      >
      </forum-post-overview>
    </div>
  </div>
</template>

<script>
import ForumPostOverview from "@/components/for-ui/ForumPostOverview";
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
