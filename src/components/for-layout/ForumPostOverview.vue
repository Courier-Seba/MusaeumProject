<template>
  <div
    class="post"
    :class="isOpen ? 'displayed' : 'hidden'"
    @click="displayPost"
  >
    <div class="media">
      <div class="media-content">
        <h1 class="subtitle is-size-2">{{ title }}</h1>
        <div class="content">
          <div v-if="mdContent !== null">
            <app-markdown-render :markdown="mdContent"></app-markdown-render>
          </div>
          <div v-else>
            <b-progress></b-progress>
          </div>
        </div>
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
      isOpen: false
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
    getMd: function() {
      api.forum
        .getMdFile(this.content)
        .then(response => (this.mdContent = response.data));
    },
    displayPost: function() {
      this.isOpen = true;
    }
  },
  created() {
    this.getMd();
  }
};
</script>

<style>
.post {
  margin-top: 1rem;
  padding: 1rem 0.5rem 0.5rem 0.9rem;
}
.hidden {
  max-height: 15rem;
  overflow: hidden;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(71, 70, 70, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(71, 70, 70, 1);
  box-shadow: 0px 3px 1px 0px rgba(71, 70, 70, 0.7);
}
.displayed {
}
</style>
