<template>
    <div class="event">
        <h2>{{ title }}</h2>
        <h3>{{ date }}</h3>

        <ol class="topics">
            <li v-for="topic in topics">
                <figure>
                    <img :src="bigPhoto"
                         alt="Проектирование React Native приложения">
                    <figcaption>{{ topic.title }}</figcaption>
                </figure>

                <section>
                    <span>Speaker:</span>&nbsp;<span>{{ topic.speaker }}</span>
                </section>

                <section>
                    <header>Resources</header>
                    <ul>
                        <li v-if="topic.slides"><a :href="topic.slides">Slides</a></li>
                        <li v-if="topic.video"><a :href="topic.video">Video</a></li>
                    </ul>
                </section>
            </li>
        </ol>

        <div v-if="bigPhoto">
            <hr>
            <section class="bigPhoto">
                <router-link :to="{ name: 'Photos', params: { id, photos, } }" class="photo">
                    <img :src="bigPhoto"
                         :alt="bigPhotoTitle">
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

<style scoped>
    .topics > li {
        display: block;
        margin: 50px 0;
    }

    .topics figure {
        margin: 0;
    }

    .topics img {
        width: 300px;
        height: 200px;
    }

    .topics section {
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
