<script>
import AppCardCourse from './AppCardCourse.vue';
import { state } from '../state.js';

export default {
    name: 'AppCourses',
    data() {
        return {
            state
        }
    },
    components: { AppCardCourse }
}
</script>

<template>
    <section id="courses">

        <div class="text-center py-5">

            <h2>Artist coaching</h2>
            <h3 class="fw-bold">Latest Online Courses</h3>

        </div>

        <div class="container">

            <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">

                <AppCardCourse :card="card" v-for="card in this.state.cardCourse" />

            </div>
            <!-- /.row -->

            <div class="text-center py-5">
                <a class="btn btn_warning_reverse d-inline-flex align-items-center gap-1" href="##">
                    <span>View all courses</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path
                            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </a>
            </div>

        </div>
        <!-- /.container -->

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


#courses {

    background-image: url('../assets/img/artist-shape-01.png'), url('../assets/img/artist-shape-02.png'), url('../assets/img/maxcoach-shape-05.png');
    background-position: top 100px right, left top, left 50px top 540px;
    background-repeat: no-repeat;

    a.btn_warning_reverse {
        padding: 0.75rem 2.5rem;
    }

}
</style>