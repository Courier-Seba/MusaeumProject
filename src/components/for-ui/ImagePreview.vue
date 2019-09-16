<template>
  <div>
    <b-button @click="launchModal" type="is-success" icon-right="image">{{
      $t("imagePreview.show")
    }}</b-button>
    <b-modal :active.sync="isImageModalActive">
      <figure class="image is-4by3">
        <img :src="imgSrc" />
      </figure>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ImagePreview",
  props: {
    imgSrc: String
  },
  data() {
    return {
      isImageModalActive: false
    };
  },
  methods: {
    launchModal: function() {
      this.isImageModalActive = true;
    }
  }
};
</script>
