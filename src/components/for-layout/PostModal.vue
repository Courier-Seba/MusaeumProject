Modal of data and editor of a post of the forum. Create a new post.
<template>
  <b-modal :active.sync="status" has-modal-card full-screen>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <b-field :label="$t('postModal.title')">
          <b-input expanded></b-input>
        </b-field>
      </header>
      <section class="modal-card-body"></section>
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
export default {
  name: "PostModal",
  data() {
    return {
      isActive: false
    };
  },
  props: {
    status: Boolean
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
