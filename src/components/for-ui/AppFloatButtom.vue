Float button that retrun "click" when pressed.
<template>
  <section>
    <div class="sticky-container">
      <ul class="sticky">
        <li>
          <button class="button is-success is-rounded" @click="clicked">
            <b-icon :icon="icon" v-if="icon"></b-icon>
            <span>{{ text }}</span>
          </button>
        </li>
      </ul>
    </div>
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
.sticky-container {
  padding: 0px;
  margin: 0px;
  position: fixed;
  right: 130px;
  bottom: 130px;
  width: 210px;
  z-index: 1100;
}
.sticky li {
  list-style-type: none;
  background-color: #fff;
  color: #efefef;
  height: 43px;
  padding: 0px;
  margin: 0px 0px 1px 0px;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}
.sticky li:hover {
  margin-left: -115px;
}
.sticky li img {
  float: left;
  margin: 5px 4px;
  margin-right: 5px;
}
.sticky li p {
  padding-top: 5px;
  margin: 0px;
  line-height: 16px;
  font-size: 11px;
}
.sticky li p a {
  text-decoration: none;
  color: #2c3539;
}
.sticky li p a:hover {
  text-decoration: underline;
}
</style>
