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
  </div>
</template>

<script>
import AppMarkdownRender from "@/components/for-ui/AppMarkdownRender";
import api from "@/api";
export default {
  name: "ForumPostOverview",
  data() {
    return {
      mdContent: null,
      isOpen: false,
      loaded: true,
      comments: []
    };
  },
  components: {
    AppMarkdownRender
  },
  props: {
    title: String,
    id: Number,
    content: String
  },
  methods: {
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
  background: linear-gradient(transparent 150px, white);
  background: linear-gradient(rgba(0, 0, 0, 0), #000);
}
</style>
