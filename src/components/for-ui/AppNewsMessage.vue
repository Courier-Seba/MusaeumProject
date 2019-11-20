<template>
  <div id="announcement-popup">
    <b-message
      closable
      aria-close-label="Close message"
      type="is-warning"
      has-icon
      auto-close
      :duration="1800"
    >
      <h1 class="is-size-5 is-danger is-uppercase">
        {{ $t("onDev.message") }}
      </h1>
    </b-message>
  </div>
</template>

<script>
export default {
  name: "AppNewsMessage",
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style>
#announcement-popup {
  position: absolute;
  top: 10%;
  left: 5%;
  right: 5%;
}
</style>
