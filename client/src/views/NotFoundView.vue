<template>
    <div>
        <center>
            <h1 v-t="{ path: 'notFoundView.title' }"></h1>
            <v-spacer></v-spacer>
            <h2 v-t="{ path: 'notFoundView.description' }"></h2>
        </center>
    </div>
</template>

<script>
export default {
name: "NotFoundView",
}
</script>

<style>

</style>