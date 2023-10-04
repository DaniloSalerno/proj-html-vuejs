<script>
export default {
    name: 'AppMentor',
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href
        }
    }
}
</script>

<template>
    <section id="artist_mentor">

        <div class="container_small py-5">

            <div class="row row-cols-1 row-cols-md-2">

                <div class="col">
                    <div class="text-center px-5">
                        <img :src="getImageUrl('../assets/img/artist-quote-icon.png')" alt="">
                        <h1 class="py-3 fw-bold">
                            I coach and mentor visual artists, like you, to Create Like You Mean It
                        </h1>
                        <h2>
                            Martin Garrix
                        </h2>
                    </div>
                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="pt-5">
                        As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help
                        you get you back on track to being the productive, creative, meaningful and authentic artist you
                        truly want to be. I support artists in crafting and living a creative life as well as felling good
                        about themselves and their art.
                        <br><br>
                        As an artist and educator for nearly 30 years, I understand what it takes to create.
                    </div>

                    <a class="btn btn_warning_reverse mt-4" href="##">Get started today</a>
                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

        </div>
        <!-- /.container_small -->

        <div class="images">

        </div>

    </section>
    <!-- /#artist_mentor -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#artist_mentor {

    background-image: url('../assets/img/wave(1).svg');
    background-position: bottom right;
    background-repeat: no-repeat;

    .btn_warning_reverse {
        padding: 0.75rem 2.5rem;
    }

    .images {
        height: 740px;

        background-image: url('../assets/img/icon-youtube-play.png'), url('../assets/img/artist-video-poster.jpg'), url('../assets/img/maxcoach-shape-05.png'), url('../assets/img/maxcoach-shape-12-150x150.png');
        background-position: center, center, top 65px left 320px, bottom 65px right 270px;
        background-repeat: no-repeat;

    }

}
</style>