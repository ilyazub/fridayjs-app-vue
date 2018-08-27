<template>
    <h1>MAIN EVENT {{ $route.params.id }}</h1>
</template>

<script>
    export default {
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
