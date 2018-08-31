<template>
  <div class="topics">
    <div v-for="topic in topics" :key="topic.id" class="topic">
      <div class="image-container">
        <ImageContainer :src="topic.speakerPhoto" class="d-none d-sm-block" />
      </div>

      <div class="content">
        <h4 class="title">{{ topic.title }}</h4>
        <h5 class="speaker">{{ topic.speaker }}</h5>

        <section v-if="showLinks(topic)">
          <a v-if="topic.slides" :href="topic.slides" target="_blank">Слайды</a>
          <span v-if="showSeparator(topic)" class="separator">&middot;</span>
          <a v-if="topic.video" :href="topic.video" target="_blank">Видео</a>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageContainer from "@/components/ImageContainer.vue";

  export default {
    components: {
      ImageContainer,
    },
    props: [
      'topics',
    ],
    methods: {
      showLinks(topic) {
        return topic.slides || topic.video;
      },
      showSeparator(topic) {
        return topic.slides && topic.video;
      },
    },
  }
</script>

<style scoped>
  .topics {
    width: 100%;
    margin-bottom: 1.5rem;

    border-left: 2px solid #fad849;
  }

  .topic {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }

  .image-container {
    width: 125px;
    height: 125px;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .title {
    margin-bottom: 1.125rem;
  }

  .separator {
    padding: 0 0.25rem;
  }

  @media (min-width: 576px) {
    .topics {
      border-left: none;
    }
    .topic {
      padding-left: 0;
    }
  }
</style>
