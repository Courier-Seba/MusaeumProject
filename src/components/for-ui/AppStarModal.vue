<template>
  <div>
    <div @click="giveStar">
      <b-icon :size="size" icon="star" :type="starType"></b-icon>
    </div>
    <b-modal :active.sync="isActive" has-modal-card>
      <div id="star-modal" class="card has-text-centered" v-if="userIsLogged">
        <h1 class="is-size-4 subtitle">{{ $t("star.title") }}</h1>
        <b-field :label="$t('star.comment')">
          <b-input type="textarea" maxlength="5000" v-model="comment"></b-input>
        </b-field>
        <b-button
          size="large"
          type="is-primary"
          icon-right="check"
          @click="sendStar"
        ></b-button>
      </div>
      <div id="star-modal" class="card has-text-centered" v-else>
        <h1 class="has-text-red subtitle">{{ $t("common.noLogged") }}</h1>
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
    },
    museum: Number
  },
  methods: {
    ...mapActions(["postStar"]),
    giveStar: function() {
      this.isActive = true;
    },
    sendStar: function() {
      let payload = {
        museum: this.museum,
        voter: this.userPk,
        comment: this.comment,
        status: true
      };
      this.postStar(payload);
    }
  },
  computed: {
    ...mapGetters(["userIsLogged", "userPk"])
  }
};
</script>

<style>
#star-modal {
  padding: 15%;
}
</style>
