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
    <div id="new-post">
      <app-float-buttom
        v-if="!isPostModalActive"
        :text="$t('forumView.newPost')"
        @pressed="openPostModal"
      ></app-float-buttom>
      <post-modal
        :status="isPostModalActive"
        @ready="confirmNewPost"
        @cancel="closePostModal"
      ></post-modal>
    </div>
  </div>
</template>

<script>
import ForumPostOverview from "@/components/for-layout/ForumPostOverview";
import AppFloatButtom from "@/components/for-ui/AppFloatButtom";
import PostModal from "@/components/for-layout/PostModal";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ForumView",
  data() {
    return {
      isPostModalActive: false
    };
  },
  components: {
    ForumPostOverview,
    AppFloatButtom,
    PostModal
  },
  methods: {
    ...mapActions(["getLastestPosts"]),
    openPostModal: function() {
      this.isPostModalActive = true;
    },
    closePostModal: function() {
      this.isPostModalActive = false;
    },
    confirmNewPost: function() {
      // This should check for a new post from server and store
    }
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
#new-post {
  margin-top: 2rem;
}
</style>
