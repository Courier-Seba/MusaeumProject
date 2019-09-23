<template>
  <div class="columns is-multiline">
    <div class="column is-full has-text-centered">
      <h1 class="is-size-4 title is-uppercase">
        {{ $t("dashboard.homeView.title") }}
      </h1>
    </div>
    <div class="column is-full has-text-centered">
      <p>{{ $t("dashboard.homeView.whatToDo") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MuseumView"
};
</script>
