<script>
export default {
    name: 'AppBlog',
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href
        }
    }
}
</script>

<template>
    <section id="blog">

        <div class="text-center py-5">

            <h2>Artist coaching</h2>
            <h3 class="fw-bold">Latest From The Blog</h3>

        </div>

        <div class="container_small">

            <div class="row row-col-3 g-5">

                <div class="col flex-grow-0 col_left">

                    <div class="card card_small border-0">

                        <img :src="getImageUrl('../assets/img/artist-blog-03-480x356.jpeg')" alt="">

                        <div class="card-body">

                            <div class="category">
                                artist
                            </div>
                            <!-- /.category -->

                            <a href="##" class="fw-bold py-3 text-decoration-none text-black d-inline-block">
                                Brush Strokes Energize Trees in Paintings
                            </a>

                            <div class="blog_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                                    </svg>

                                    <div class="lessons">May 15, 2020</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                        <path
                                            d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                    </svg>

                                    <div class="students">688 views</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card_small -->

                </div>
                <!-- /.col -->

                <div class="col">
                    <div class="card card_big border-0">

                        <img :src="getImageUrl('../assets/img/artist-blog-02-500x680.jpg')" alt="">

                        <div class="card-body d-flex flex-column justify-content-end">

                            <div class="category">
                                artist
                            </div>
                            <!-- /.category -->

                            <h5 class="fw-bold fs-3 py-3">
                                Connection Between Self-Portraits and Identify
                            </h5>

                            <div class="blog_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                                    </svg>

                                    <div class="lessons">May 15, 2020</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                        <path
                                            d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                    </svg>

                                    <div class="students">397 views</div>

                                </div>

                            </div>
                            <!-- /.blog_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card_big -->

                </div>
                <!-- /.col -->

                <div class="col flex-grow-0 col_right">

                    <div class="card card_small border-0">

                        <img :src="getImageUrl('../assets/img/artist-blog-01-480x356.jpg')" alt="">

                        <div class="card-body">

                            <div class="category">
                                artist
                            </div>
                            <!-- /.category -->

                            <a href="##" class="fw-bold py-3 text-decoration-none text-black d-inline-block">
                                Pocket-Sized Notebooks Hold Miniature Paintings
                            </a>

                            <div class="blog_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                                    </svg>

                                    <div class="lessons">May 15, 2020</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                        <path
                                            d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                    </svg>

                                    <div class="students">603 views</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card_small -->

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->


            <div class="text-center py-5 d-flex align-items-center justify-content-center gap-2">

                <div>Get into details now?</div>

                <a class="btn d-inline-flex align-items-center gap-1" href="##">
                    <span>View all posts</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path
                            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </a>
            </div>




        </div>
        <!-- /.container_small -->

    </section>
    <!-- /#blog -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#blog {
    background-image: url('../assets/img/maxcoach-shape-14.png');
    background-position: center;
    background-repeat: no-repeat;

    background-color: $mc_light;

    .col a:hover {
        text-decoration: underline;

    }


    .col_left {
        padding-top: 120px;
    }

    .col_right {
        padding-top: 50px;
    }

    .card_small {

        width: 240px;

        .category {
            font-size: 0.85rem;
            color: #808080;
            text-transform: uppercase;
        }

        .blog_info {
            color: #808080;
            font-size: 0.75rem;

            svg {
                filter: invert(55%) sepia(0%) saturate(69%) hue-rotate(225deg) brightness(91%) contrast(86%);
            }
        }

    }

    .card_big {
        width: 400px;
        color: $mc-white;
        background-color: rgba(0, 0, 0, 0.5);

        position: relative;

        .card-body {
            position: absolute;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.25);
            bottom: 0;
            left: 0;

            .category {
                text-transform: uppercase;
            }

            svg {
                filter: invert(100%) sepia(23%) saturate(0%) hue-rotate(317deg) brightness(100%) contrast(103%);
            }
        }
    }

    a.btn {
        color: $mc_warning;
        font-weight: bold;
        background-color: transparent;
        padding: 0;

        svg {
            filter: invert(72%) sepia(46%) saturate(6626%) hue-rotate(340deg) brightness(97%) contrast(94%);
        }
    }
}
</style>