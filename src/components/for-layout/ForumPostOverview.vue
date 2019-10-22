<template>
  <div :class="isOpen ? 'displayed' : 'hidden'" class="post-box">
    <div class="media">
      <div class="media-content post" @click="displayPost">
        <h1 class="subtitle is-size-2">{{ title }}</h1>
        <div class="content">
          <div v-if="mdContentLoaded">
            <app-markdown-render :markdown="mdContent"></app-markdown-render>
          </div>
          <div v-else>
            <b-progress></b-progress>
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
    },
    collapsePost: function() {
      this.isOpen = false;
    }
  },
  created() {
    this.getMd();
  },
  computed: {
    mdContentLoaded: function() {
      if (this.mdContent !== null) {
        return true;
      } else {
        return false;
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
.displayed {
}
</style>
