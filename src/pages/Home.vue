<template>
  <div class="container">
    <h2 style="text-align: center;">
      Наши события
    </h2>
    <ol class="events">
      <li class="event" v-for="event in events">
        <div class="flex">
          <img :src='bgImg(event)' :alt='event.title' class='image'>

          <div class="info">
            <div class="title">
              {{ event.title }}
            </div>
            <div class="date">
              {{ event.date }}
            </div>
          </div>

          <div class="show-more">
            <router-link :to="{ name: 'Event', params: event }" class="link">
              Подробнее
            </router-link>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
  export default {
    props: ['events'],
    methods: {
      bgImg(event) {
        if (event.photos) {
          return event.photos[0];
        }
      }
    },
  }
</script>

<style src="../main.css"></style>
<style scoped>
  .events {
    display: flex;
    width: 90%;
    flex-wrap: wrap;
  }

  .event {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 240px;
    margin: 0 10px 20px;

    background: lightblue;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background-color: rgba(0,0,0, 0.5);
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  }
  .title {
    font-size: 20px;
  }
  .date {
    font-size: 14px;
  }

  .show-more {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .show-more > .link {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(250, 216, 73, 0.9);
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #fff;
    font-size: 18px;
    font-family: sans-serif;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #000;
    text-decoration: none;
  }

  .show-more > .link:hover {
    opacity: 1;
  }
</style>
