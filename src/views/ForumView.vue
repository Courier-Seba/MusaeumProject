<template>
  <div class="container" id="forum-view">
    <div v-for="post in postList" :key="post.id">
      <forum-post-overview
        :id="post.id"
        :title="post.title"
        :content="post.content"
      >
      </forum-post-overview>
    </div>
    <app-float-buttom
      :text="$t('forumView.newPost')"
      @pressed="newPost"
    ></app-float-buttom>
  </div>
</template>

<script>
import ForumPostOverview from "@/components/for-layout/ForumPostOverview";
import AppFloatButtom from "@/components/for-ui/AppFloatButtom";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ForumView",
  components: {
    ForumPostOverview,
    AppFloatButtom
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

<style>
#forum-view {
  margin-top: 1.5rem;
  min-width: 95%;
}
</style>
