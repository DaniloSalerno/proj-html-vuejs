<script>
export default {
    name: 'AppJumbotron',
}
</script>

<template>
    <section id="jumbotron">

        <div class="d-flex justify-content-center align-items-center h-100">

            <div class="text-center w-25">

                <!-- NEED TO FIX FONT FAMILY -->
                <h2>Hello, Im Martin</h2>
                <!-- NEED TO FIX FONT FAMILY -->

                <div class="fw-bold fs-3">
                    Artist Coaching And Mentoring Might Be for You.
                </div>

                <button class="btn mt-3">
                    Get started today
                </button>

            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#jumbotron {
    height: 740px;
    background-color: $mc_light;
    background-image: url('../assets/img/artist-hero-image-01.jpg'), url('../assets/img/artist-hero-image-02.jpg'), url('../assets/img/artist-hero-image-03.png'), url('../assets/img/artist-hero-image-04.jpg'), url('../assets/img/maxcoach-shape-12-150x150.png'), url('../assets/img/artist-shape-01.png'), url('../assets/img/artist-shape-02.png'), url('../assets/img/artist-shape-03.png'), url('../assets/img/artist-shape-04.png'), url('../assets/img/artist-shape-05.png'), ;
    background-position: left 145px bottom 60px, left 330px bottom 270px, left 480px bottom 25px, right 240px bottom 50px, right 400px bottom 35px, top right 160px, top left -300px, left 15px top 160px, top 80px right 150px, bottom right 90px;
    background-repeat: no-repeat;

    button {
        background-color: $mc_warning;
        padding: 0.5rem 2.25rem;
        color: $mc_white;
        font-weight: bold;
    }
}
</style>