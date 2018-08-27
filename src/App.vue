<template>
    <div id="app">
        <nav>
            <header class="header">
                <a href="/">
                    <img src="~@/fridayjs.png">
                </a>
            </header>
        </nav>

        <ol class="events">
            <li class="event"><a href="/events/1"><span>FridayJS #1</span>&nbsp;at&nbsp;<span>11.08.2017</span></a></li>
            <li class="event"><a href="/events/2"><span>FridayJS #2</span>&nbsp;at&nbsp;<span>17 August</span></a></li>
            <li class="event"><a href="/events/3"><span>FridayJS #3</span>&nbsp;at&nbsp;<span>17 August</span></a></li>
            <li class="event"><a href="/events/4"><span>FridayJS #4</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/5"><span>FridayJS #5</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/6"><span>FridayJS #6</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/7"><span>FridayJS #7</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
            <li class="event"><a href="/events/8"><span>FridayJS #8</span>&nbsp;at&nbsp;<span>30 September</span></a></li>
        </ol>
    </div>

</template>

<script>
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


