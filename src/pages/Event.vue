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

    <div v-if="hasPhotos" class="photos">
      <h4>
        Фото из {{ title }}
      </h4>
      <photos :photos="photos"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Photos from "./Photos.vue";

  export default {
    components: {Photos},
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
      hasPhotos() {
        return this.photos.length > 0;
      }
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

  .photos {
    text-align: center;
  }
</style>
