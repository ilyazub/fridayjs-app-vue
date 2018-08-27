<template>
    <ol class="events">
        <li class="event" v-for="event in events">
            <router-link :to="{ name: 'Event', params: { id: event.id } }">
                <span>{{ event.title }}</span>&nbsp;at&nbsp;<span>{{ event.date }}</span>
            </router-link>
        </li>
    </ol>
</template>

<script lang="ts">
    export default {
        props: ['events'],
    }
</script>

<style scoped>
    .events {
        text-align: center;
    }

    .events .event {
        display: inline-block;
        width: 240px;
        height: 300px;
        margin: 0 10px 20px;

        background: lightblue;
    }

    .events .event a {
        display: flex;
        width: 100%;
        height: 100%;

        align-items: center;
        justify-content: center;
    }
</style>
