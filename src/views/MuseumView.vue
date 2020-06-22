<template>
  <h1>My museum (id: {{ id }})</h1>
</template>

<script>
export default {
  name: "MuseumView",
  props: {
    id: {
      required: true
    }
  }
}
</script>
