<template>
  <div class="media">
    <div class="media-content">
      <h1 class="subtitle is-size-4">{{ title }}</h1>
      <div class="content">
        <div v-if="rendered !== null" v-html="rendered"></div>
        <div v-else>
          <b-progress></b-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from "@/plugins/marked";
import api from "@/api";
export default {
  name: "ForumPostOverview",
  data() {
    return {
      mdContent: null
    };
  },
  props: {
    title: String,
    id: Number,
    content: String
  },
  methods: {
    renderMd: function() {
      this.rendered = marked(this.mdContent);
    },
    getSaveMd: function() {
      api.forum
        .getMdFile(this.content)
        .then(response => (this.mdContent = response.data));
    }
  },
  created() {
    this.getSaveMd();
  },
  computed: {
    rendered: function() {
      if (this.mdContent !== null) {
        return marked(this.mdContent);
      } else {
        return null;
      }
    }
  }
};
</script>
