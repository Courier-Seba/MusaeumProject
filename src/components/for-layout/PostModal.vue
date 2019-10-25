<template>
  <b-modal
    :active.sync="isPostModalActive"
    has-modal-card
    full-screen
    :can-cancel="false"
  >
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <b-field :title="$t('postModal.title')">
          <b-input expanded></b-input>
        </b-field>
      </header>
      <section class="modal-card-body"></section>
      <footer class="modal-card-foot">
        <b-button>{{ $t("postModal.close") }}</b-button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "PostModal",
  props: {
    status: Boolean
  }

};
</script>
