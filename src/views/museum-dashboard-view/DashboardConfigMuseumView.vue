<template>
    <div class="profile-config" @click="nombredealgo">
        <h1>ASA</h1>
    </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "DashboardConfigurationView",
    data () {
        return{

        }
    },
    computed: {
        ...mapGetters(["userMusem"])
    },
    methods: {
        nombredealgo: function (){
            console.log(this.userMuseum);
        }
    }

}
</script>

<style>
.profile-config{
    margin-left: 5rem;
    margin-top: 1rem;
}
</style>