<script>
export default {
    name: 'AppCoaching',
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href
        }
    }
}
</script>

<template>
    <section id="artist_coaching">

        <div class="container_small pb-5">

            <div class="text-center">

                <h2>Artist coaching</h2>

                <div class="fs-3 fw-bold">

                    I understand what it takes to create. <br> I can help you with

                </div>

            </div>

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">

                <div class="col">
                    <img :src="getImageUrl('../assets/img/artist-box-image-01.png')" alt="">
                    <!-- <img src="../assets/img/artist-box-image-01.png" alt=""> -->
                    <h5>Online Coures</h5>
                    <div>
                        Online art coasching now offers you s very powerful way to redesign you artist mind.
                    </div>
                </div>
                <!-- /.col -->

                <div class="col even_col">
                    <img :src="getImageUrl('../assets/img/artist-box-image-02.png')" alt="">
                    <!-- <img src="../assets/img/artist-box-image-01.png" alt=""> -->
                    <h5>One to One</h5>
                    <div>
                        Gettin the necessary clarity about the current state to help you imrove your ability.
                    </div>
                </div>
                <!-- /.col -->

                <div class="col">
                    <img :src="getImageUrl('../assets/img/artist-box-image-03.png')" alt="">
                    <!-- <img src="../assets/img/artist-box-image-01.png" alt=""> -->
                    <h5>Anywhere</h5>
                    <div>
                        Access to valurable and portable program which allow you to setup and live anywhere you want.
                    </div>
                </div>
                <!-- /.col -->

                <div class="col even_col">
                    <img :src="getImageUrl('../assets/img/artist-box-image-04.png')" alt="">
                    <!-- <img src="../assets/img/artist-box-image-01.png" alt=""> -->
                    <h5>On Time</h5>
                    <div>
                        Punctually is our top priority because it's an essential criteria to assess a program quality.
                    </div>
                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->


        </div>
        <!-- /.container_small -->

    </section>
    <!-- /#artist_coaching -->
</template>

<style lang="scss" scoped>
#artist_coaching {
    height: 670px;
    background-image: url('../assets/img/maxcoach-shape-13.png'), url('../assets/img/maxcoach-shape-14.png'), url('../assets/img/artist-shape-01.png');
    /* ULTIMA IMMAGINE DA FIXARE,NON è QUELLA CORRETTA */
    background-position: right -40px center, left center, left top -180px;
    background-repeat: no-repeat;

    .container_small,
    .row {
        padding-top: 5rem;
    }

    .even_col {
        padding-top: 4.5rem;
    }

    h5 {
        padding: 1rem 0;
    }
}
</style>