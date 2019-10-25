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
    <b-modal
      :active.sync="isPostModalActive"
      has-modal-card
      full-screen
      :can-cancel="false"
    >
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Email">
            <b-input
              type="email"
              :value="email"
              placeholder="Your email"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              :value="password"
              password-reveal
              placeholder="Your password"
              required
            >
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">
            Close
          </button>
          <button class="button is-primary">Login</button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ForumPostOverview from "@/components/for-layout/ForumPostOverview";
import AppFloatButtom from "@/components/for-ui/AppFloatButtom";
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
    AppFloatButtom
  },
  methods: {
    ...mapActions(["getLastestPosts"]),
    newPost: function() {
      this.isPostModalActive = true;
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
</style>
