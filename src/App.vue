<template>
    <div id="app">
        <nav>
            <header class="header">
                <router-link to="/">
                    <img src="~@/fridayjs.png">
                </router-link>
            </header>
        </nav>

        <router-view/>
    </div>
</template>

<script lang="ts">
    export default {
        created() {
            console.log('Created')
        },
        mounted() {
            console.log('Mounted')
        }
    }
</script>

<style scoped>
    .header {
        height: 100px;
    }

    .header img {
        width: 220px;
        height: 100px;
    }
</style>


