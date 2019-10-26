Modal of data and editor of a post of the forum. Create a new post.
<template>
  <b-modal :active.sync="status" has-modal-card full-screen>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <b-field :label="$t('postModal.title')">
          <b-input v-model="title" expanded></b-input>
        </b-field>
      </header>
      <section class="modal-card-body">
        <app-markdown-editor :isDisabled="titleComplete"></app-markdown-editor>
      </section>
      <footer class="modal-card-foot">
        <b-button @click="closeModal" type="is-danger">{{
          $t("postModal.close")
        }}</b-button>
        <b-button @click="finishPost" type="is-primary">{{
          $t("postModal.done")
        }}</b-button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
import AppMarkdownEditor from "@/components/for-ui/AppMarkdownEditor";
export default {
  name: "PostModal",
  components: {
    AppMarkdownEditor
  },
  data() {
    return {
      isActive: false,
      title: "",
      titleComplete: true
    };
  },
  props: {
    status: Boolean
  },
  watch: {
    title: function() {
      this.title.length > 5 ? (this.titleComplete = false) : null; // TODO add style to input
    }
  },
  methods: {
    finishPost: function() {
      // api call and publish
      this.emit("ready");
    },
    closeModal: function() {
      this.$emit("cancel");
    }
  },
  created() {
    this.isActive = this.status;
  }
};
</script>
