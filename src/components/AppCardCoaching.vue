<script>
export default {
    name: 'AppCardCoaching',
    props: {
        card: Object
    },

    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div :class="card.id % 2 ? 'col' : 'col even_col'">
        <img :src="getImageUrl(`../assets/img/${card.imgPath}`)" alt="">
        <h5>{{ card.title }}</h5>
        <div class="content">
            {{ card.content }}
        </div>
    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>
.even_col {
    padding-top: 4.5rem;
}

.content {
    font-size: 0.9rem;
}

h5 {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
}
</style>