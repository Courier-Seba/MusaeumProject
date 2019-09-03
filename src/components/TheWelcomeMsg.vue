<template>
  <div id="welcome" class="container has-text-dark">
    <h1 class="is-size-2">{{ $t("welcome.title") }}</h1>
    <p class="is-size-4">{{ $t("welcome.intro") }}</p>
    <h6 class="is-size-6 has-text-grey">{{ $t("welcome.outro") }}</h6>
    <h6 class="is-size-7 has-text-grey">- Rodrigo Barceló</h6>
  </div>
</template>

<script>
export default {
  name: "AppWelcomeMsg"
};
</script>

<style>
#welcome {
  margin-top: 1rem;
  margin-botton: 1rem;
}
</style>
