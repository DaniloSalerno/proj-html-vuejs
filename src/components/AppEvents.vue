<script>
export default {
    name: 'AppEvents',
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href
        }
    }
}
</script>

<template>
    <section id="events">

        <div class="container_small">

            <div class="text-center py-5">

                <h2>Upcoming Events</h2>
                <h3 class="fw-bold">Let's Work Together</h3>

            </div>

            <div class="row row-cols-1 row-cols-xl-2 g-5 py-5">

                <div class="col">

                    <div class="card border-0 d-flex flex-row">

                        <div>
                            <img :src="getImageUrl('../assets/img/artist-event-04-250x300.jpg')" alt="">
                        </div>

                        <div class="card-body d-flex flex-column justify-content-center">

                            <div class="date">
                                NOV 22, 2020
                            </div>
                            <!-- /.date -->

                            <a href="##" class="fw-bold py-3 text-black d-inline-block">
                                Storytelling Workshop
                            </a>

                            <div class="location d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>

                                    <div class="lessons">Texas, US</div>

                                </div>

                            </div>
                            <!-- /.location -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0 d-flex flex-row">

                        <div>
                            <img :src="getImageUrl('../assets/img/artist-event-03-250x300.jpg')" alt="">
                        </div>

                        <div class="card-body d-flex flex-column justify-content-center">

                            <div class="date">
                                0CT 10, 2020
                            </div>
                            <!-- /.date -->

                            <a href="##" class="fw-bold py-3 text-black d-inline-block">
                                Painting Art Contest 2020
                            </a>

                            <div class="location d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>

                                    <div class="lessons">New York, US</div>

                                </div>

                            </div>
                            <!-- /.location -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0 d-flex flex-row-reverse">

                        <div>
                            <img :src="getImageUrl('../assets/img/artist-event-02-250x300.jpg')" alt="">
                        </div>

                        <div class="card-body d-flex flex-column justify-content-center text-end">

                            <div class="date">
                                NOV 23, 2020
                            </div>
                            <!-- /.date -->

                            <a href="##" class="fw-bold py-3 text-black d-inline-block">
                                International Art Fair 2020
                            </a>

                            <div class="location d-flex align-items-center align-self-end gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>

                                    <div class="lessons">Hamburg, Germany</div>

                                </div>

                            </div>
                            <!-- /.location -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0 d-flex flex-row-reverse">

                        <div>
                            <img :src="getImageUrl('../assets/img/artist-event-01-250x300.jpg')" alt="">
                        </div>

                        <div class="card-body d-flex flex-column justify-content-center text-end">

                            <div class="date">
                                DEC 15, 2020
                            </div>
                            <!-- /.date -->

                            <a href="##" class="fw-bold py-3 text-black d-inline-block">
                                Street Performance: Call for Artist
                            </a>

                            <div class="location d-flex align-items-center gap-4 align-self-end">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>

                                    <div class="lessons">Illinois, US</div>

                                </div>

                            </div>
                            <!-- /.location -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row-->

        </div>
        <!-- /.container_small -->


    </section>
</template>

<style lang="scss" scoped>
.card-body {

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .date {
        font-weight: bold;
        font-size: 0.85rem;
        color: #808080;
        text-transform: uppercase;
    }

    .location {
        color: #808080;
        font-size: 0.75rem;

        svg {
            filter: invert(55%) sepia(0%) saturate(69%) hue-rotate(225deg) brightness(91%) contrast(86%);
        }
    }
}
</style>