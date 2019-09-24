<template>
  <div>
    <div @click="giveStar">
      <b-icon :size="size" icon="star" :type="starType"></b-icon>
    </div>
    <b-modal :active.sync="isActive" has-modal-card>
      <div id="star-modal" class="card has-text-centered">
        <h1 class="is-size-4 subtitle">{{ $t("star.title") }}</h1>
        <b-field :label="$t('star.comment')">
          <b-input type="textarea" maxlength="5000"></b-input>
        </b-field>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MuseumStarModal",
  data() {
    return {
      isActive: false,
      status: "true",
      comment: "",
      starType: "is-black",
      star: false
    };
  },
  props: {
    size: {
      type: String,
      default: "is-large"
    }
  },
  methods: {
    ...mapActions([""]),
    giveStar: function() {
      this.isActive = true
    }
  },
  computed: {
    ...mapGetters(["isUserLogged"])
  }
};
</script>

<style>
#star-modal {
  padding: 15%;
}
</style>
