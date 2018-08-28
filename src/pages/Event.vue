<template>
  <div class="event container">
    <h2>{{ title }}</h2>
    <h3>{{ date }}</h3>

    <div>Темы:</div>
    <ol class="topics">
      <li v-for="topic in topics" class="topic-wrap">
        <figure class="topic">
          <img :src="bigPhoto" alt="Проектирование React Native приложения" class="topic-photo">
          <figcaption class="topic-info">
            <h4>{{ topic.title }}</h4>

            <section>
              <span>Докладчики:</span>&nbsp;<span>{{ topic.speaker }}</span>
            </section>

            <section>
              <header>Ресурсы</header>
              <ul>
                <li v-if="topic.slides"><a :href="topic.slides">Слайды</a></li>
                <li v-if="topic.video"><a :href="topic.video">Видео</a></li>
              </ul>
            </section>
          </figcaption>
        </figure>
      </li>
    </ol>

    <div v-if="bigPhoto">
      <hr>
      <section class="bigPhoto">
        <router-link :to="{ name: 'Photos', params: { id, photos, } }" class="photo">
          <img :src="bigPhoto" :alt="bigPhotoTitle">
        </router-link>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props: [
      'id',
      'title',
      'date',
      'topics',
      'photos',
    ],
    computed: {
      bigPhoto() {
        return this.photos[0];
      },
      bigPhotoTitle() {
        return `View photos of ${this.title}`;
      },
    },
  }
</script>

<style src="../main.css"></style>
<style scoped>
  .topic-wrap {
    display: block;
    margin: 50px 0;
  }

  .topic-wrap:first-child {
    margin: 10px;
  }

  .topic {
    display: flex;
    margin: 0;
  }

  .topic-info {
    margin-left: 20px;
  }

  .topic-photo {
    width: 300px;
    height: 200px;
  }

  .info section {
    margin: 10px 0;
  }

  .bigPhoto {
    display: flex;
    justify-content: center;
  }

  .photo {
    width: 50%;
    height: 50%;
  }

  .photo img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
