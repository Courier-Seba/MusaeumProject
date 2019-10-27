Float button that retrun "click" when pressed.
<template>
  <section id="footer-button">
    <b-button type="is-primary" @click="clicked">+ +</b-button>
  </section>
</template>

<script>
export default {
  name: "AppFloatButtom",
  props: {
    text: String,
    icon: String
  },
  methods: {
    clicked: function() {
      this.$emit("pressed");
    }
  }
};
</script>

<style>
#footer-button {
  position: -webkit-sticky;
  position: sticky;
  height: 3rem;
  min-width: 100%;
  bottom: 0px;
  vertical-align: middle;
  text-align: center;
}
</style>
