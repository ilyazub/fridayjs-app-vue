<template>
    <ol class="events">
        <li class="event"><router-link to="/events/1"><span>FridayJS #1</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/2"><span>FridayJS #2</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/3"><span>FridayJS #3</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/4"><span>FridayJS #4</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/5"><span>FridayJS #5</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/6"><span>FridayJS #6</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/7"><span>FridayJS #7</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/9"><span>FridayJS #9</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/10"><span>FridayJS #10</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
        <li class="event"><router-link to="/events/11"><span>FridayJS #11</span>&nbsp;at&nbsp;<span>11.08.2017</span></router-link></li>
    </ol>
</template>

<script lang="ts">

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
