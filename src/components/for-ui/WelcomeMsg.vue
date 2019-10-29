Welcome mensage of the page.
<template>
  <div id="welcome" class="hero is-large">
    <section class="hero-body">
      <div class="container">
        <h1 class="is-size-2">{{ $t("welcome.title") }}</h1>
        <p class="is-size-4">{{ $t("welcome.intro") }}</p>
        <hr />
        <h6 class="is-size-6 has-text-black">{{ $t("welcome.outro") }}</h6>
        <h6 class="is-size-7 has-text-grey">- Rodrigo Barceló</h6>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WelcomeMsg"
};
</script>
