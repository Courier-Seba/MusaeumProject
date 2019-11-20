<template>
  <b-message
    closable
    aria-close-label="Close message"
    type="is-warning"
    has-icon
    auto-close
    :duration="3000"
  >
    <h1 class="is-size-4 is-danger is-uppercase">
      {{ $t("onDev.message") }}
    </h1>
  </b-message>
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
