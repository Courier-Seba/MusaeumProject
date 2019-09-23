<template>
  <div>
    <div id="search-museum" v-if="isVisible">
      <div class="container">
        <b-field grouped>
          <b-input v-model="input" icon="search" rounded expanded> </b-input>
          <b-button
            @click="hideSearchBar"
            size="small"
            icon-right="eye-slash"
          ></b-button>
        </b-field>
      </div>
    </div>
    <div class="float-buttom" @click="showSearchBar" v-else>
      <b-icon icon="search" custom-class="my-float"></b-icon>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MuseumFilterBar",
  data() {
    return {
      input: "",
      isVisible: false
    };
  },
  methods: {
    ...mapActions(["getSearchMuseumList"]),
    scrollToTop: function() {
      window.scrollTo(0, 0);
    },
    showSearchBar: function() {
      this.isVisible = true;
      this.scrollToTop();
    },
    hideSearchBar: function() {
      this.isVisible = false;
    }
  },
  watch: {
    input: function() {
      this.getSearchMuseumList(this.input);
    }
  }
};
</script>

<style>
#search-museum {
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid black;
  box-shadow: 0 4px 2px -2px gray;
  z-index: 9999;
}
.float-buttom {
  position: fixed;
  width: 50px;
  height: 50px;
  top: 3%;
  left: 45%;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 9999;
}
.my-float {
  margin-top: 28px;
}
</style>
