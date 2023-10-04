<script>
import AppJumbotron from './AppJumbotron.vue';
import AppCoaching from './AppCoaching.vue';
import AppMentor from './AppMentor.vue';
import AppTestimonials from './AppTestimonials.vue';
import AppCourses from './AppCourses.vue';
import AppBlog from './AppBlog.vue';
import AppEvents from './AppEvents.vue';


export default {
    name: 'AppMain',
    components: {
        AppJumbotron,
        AppCoaching,
        AppMentor,
        AppTestimonials,
        AppCourses,
        AppBlog,
        AppEvents
    }
}
</script>

<template>
    <AppJumbotron />
    <AppCoaching />
    <AppMentor />
    <AppTestimonials />
    <AppCourses />
    <AppBlog />
    <AppEvents />
</template>

<style lang="scss" scoped></style>