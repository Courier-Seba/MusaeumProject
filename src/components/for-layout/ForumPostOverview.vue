<template>
  <div class="media">
    <div class="media-content">
      <h1 class="subtitle is-size-4">{{ title }}</h1>
      <div class="content">
        <div v-if="mdContent !== null">
          <app-markdown-render :md="mdContent"> </app-markdown-render>
        </div>
        <div v-else>
          <b-progress></b-progress>
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
      mdContent: null
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
    getSaveMd: function() {
      api.forum
        .getMdFile(this.content)
        .then(response => (this.mdContent = response.data));
    }
  },
  created() {
    this.getSaveMd();
  }
};
</script>
