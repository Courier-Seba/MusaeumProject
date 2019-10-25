<template>
  <div :class="isOpen ? 'displayed' : 'hidden'" class="post-box">
    <div class="media" :class="isOpen === false ? 'fade' : ''">
      <div class="media-content post" @click="displayPost">
        <h1 class="subtitle is-size-2">{{ title }}</h1>
        <div class="content">
          <div v-if="loaded">
            <app-markdown-render :markdown="content"></app-markdown-render>
          </div>
          <div v-else>
            <b-progress></b-progress>
          </div>
        </div>

        <div
          class="comment media"
          v-for="comment in comments"
          :key="comment.id"
        >
          <div class="media-content">
            <div class="content">
              <app-markdown-render
                :markdown="comment.content"
              ></app-markdown-render>
            </div>
          </div>
        </div>
      </div>

      <div class="media-right" v-if="isOpen">
        <button class="delete" @click="collapsePost"></button>
      </div>
    </div>
    <div class="new-comment media">
      <div class="media-content">
        <app-markdown-input @input="updateComment"></app-markdown-input>
        <b-field>
          <b-button @click="postComment">{{
            $t("forumView.postComment")
          }}</b-button>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import AppMarkdownRender from "@/components/for-ui/AppMarkdownRender";
import AppMarkdownInput from "@/components/for-ui/AppMarkdownInput";
import api from "@/api";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ForumPostOverview",
  data() {
    return {
      isOpen: false,
      loaded: true,
      comments: [],
      newComment: ""
    };
  },
  computed: {
    ...mapGetters(["userPk"])
  },
  components: {
    AppMarkdownRender,
    AppMarkdownInput
  },
  props: {
    title: String,
    id: Number,
    content: String
  },
  methods: {
    ...mapActions(["postForumComment"]),
    displayPost: function() {
      this.isOpen = true;
      this.loadComments();
    },
    collapsePost: function() {
      this.isOpen = false;
    },
    loadComments: function() {
      api.forum
        .getCommentsOfPost(this.id)
        .then(response => (this.comments = response.data.results));
    },
    updateComment: function(payload) {
      this.newComment = payload;
    },
    postComment: function() {
      if (this.newComment.length > 20) {
        let comment = {
          content: this.newComment,
          post: this.id,
          owner: this.userPk
        };
        this.postForumComment(comment).then(status =>
          status ? this.$buefy.toast.open(this.$t("forumView.error")) : null
        );
      } else {
        this.$buefy.toast.open({
          duration: 5000,
          message: this.$t("forumView.shortComment"),
          position: "is-bottom",
          type: "is-danger"
        });
      }
    }
  }
};
</script>

<style>
.post-box {
  margin-top: 1rem;
}
.post {
  padding: 1rem 0.5rem 0.5rem 0.9rem;
}
.hidden {
  max-height: 15rem;
  overflow: hidden;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(71, 70, 70, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(71, 70, 70, 1);
  box-shadow: 0px 3px 1px 0px rgba(71, 70, 70, 0.7);
}
.fade {
}
</style>
