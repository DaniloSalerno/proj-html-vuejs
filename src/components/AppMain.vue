<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCoaching from './AppCoaching.vue';
import AppMentor from './AppMentor.vue';
import AppTestimonials from './AppTestimonials.vue';


export default {
    name: 'AppMain',
    components: {
        AppJumbotron,
        AppCoaching,
        AppMentor,
        AppTestimonials
    }
}
</script>

<template>
    <AppJumbotron />
    <AppCoaching />
    <AppMentor />
    <AppTestimonials />
</template>

<style lang="scss" scoped></style>