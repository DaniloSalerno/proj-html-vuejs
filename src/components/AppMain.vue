<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCoaching from './AppCoaching.vue';
import AppMentor from './AppMentor.vue';
import AppTestimonials from './AppTestimonials.vue';
import AppCourses from './AppCourses.vue';


export default {
    name: 'AppMain',
    components: {
        AppJumbotron,
        AppCoaching,
        AppMentor,
        AppTestimonials,
        AppCourses
    }
}
</script>

<template>
    <AppJumbotron />
    <AppCoaching />
    <AppMentor />
    <AppTestimonials />
    <AppCourses />
</template>

<style lang="scss" scoped></style>