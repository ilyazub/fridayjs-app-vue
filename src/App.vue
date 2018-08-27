<template>
    <div id="app">
        <nav>
            <header class="header">
                <router-link to="/">
                    <img src="~@/fridayjs.png">
                </router-link>
            </header>
        </nav>

        <router-view :events="events"/>
    </div>
</template>

<script lang="ts">
    import events from './fridayjs.json';

    export default {
        data() {
            return {
                events: [],
            }
        },
        created() {
            this.events = events;
        },
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


