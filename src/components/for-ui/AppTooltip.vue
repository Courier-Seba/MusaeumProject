<template lang="html">
  <b-tooltip :label="$t(text)" position="is-right">
    <a><b-icon icon="question-circle" size="is-small"></b-icon></a>
  </b-tooltip>
</template>

<script>
export default {
  name: "AppTooltip",
  props: {
    text: String
  }
};
</script>
