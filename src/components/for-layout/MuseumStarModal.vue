<template>
  <b-modal :active.sync="isActive" has-modal-card>
    <div class="modal-card has-text-centered">
      <h1 class="is-size-4 subtitle">{{ $t("star.title") }}</h1>
      <b-field :label="$t('star.comment')">
        <b-input type="textarea" maxlength="5000"></b-input>
      </b-field>
    </div>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MuseumStarModal",
  data() {
    return {
      status: "true",
      comment: ""
    };
  },
  methods: {
    ...mapActions([""])
  },
  computed: {
    ...mapGetters(["isUserLogged"])
  },
  props: {
    isActive: Boolean
  }
};
</script>
