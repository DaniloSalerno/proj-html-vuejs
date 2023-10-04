<script>
export default {
    name: 'AppCourses',
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href
        }
    }
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

                <div class="col">

                    <div class="card border-0">

                        <img width="300" :src="getImageUrl('../assets/img/artist-course-01-480x480.jpg')" alt="">

                        <div class="card-body">

                            <div class="price">
                                $18.00
                            </div>
                            <!-- /.price -->

                            <a href="##" class="d-inline-block py-3">The Acrylic Painting Academy</a>

                            <div class="course_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                    </svg>

                                    <div class="lessons">4 Lessons</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                    <div class="students">50 Students</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0">

                        <img width="300" :src="getImageUrl('../assets/img/artist-course-02-480x480.jpg')" alt="">

                        <div class="card-body">

                            <div class="price">
                                $21.00
                            </div>
                            <!-- /.price -->

                            <a href="##" class="d-inline-block py-3">Drawing and Shalding: Complete Course</a>

                            <div class="course_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                    </svg>

                                    <div class="lessons">14 Lessons</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                    <div class="students">50 Students</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0">

                        <img width="300" :src="getImageUrl('../assets/img/artist-course-03-480x480.jpg')" alt="">

                        <div class="card-body">

                            <div class="price">
                                $19.00
                            </div>
                            <!-- /.price -->

                            <a href="##" class="d-inline-block py-3">The Color Theory for Digital Artist</a>

                            <div class="course_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                    </svg>

                                    <div class="lessons">7 Lessons</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                    <div class="students">50 Students</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0">

                        <img width="300" :src="getImageUrl('../assets/img/artist-course-04-480x480.jpg')" alt="">

                        <div class="card-body">

                            <div class="price">
                                $35.00
                            </div>
                            <!-- /.price -->

                            <a href="##" class="d-inline-block py-3">Ultimate Guide to Digital Sketching for Beginner</a>

                            <div class="course_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                    </svg>

                                    <div class="lessons">14 Lessons</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                    <div class="students">50 Students</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0">

                        <img width="300" :src="getImageUrl('../assets/img/artist-course-05-480x480.jpg')" alt="">

                        <div class="card-body">

                            <div class="price">
                                $19.00
                            </div>
                            <!-- /.price -->

                            <a href="##" class="d-inline-block py-3">Portrait Drawing The Wmart Way</a>

                            <div class="course_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                    </svg>

                                    <div class="lessons">2 Lessons</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                    <div class="students">50 Students</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0">

                        <img width="300" :src="getImageUrl('../assets/img/artist-course-06-480x480.jpg')" alt="">

                        <div class="card-body">

                            <div class="price">
                                $19.00
                            </div>
                            <!-- /.price -->

                            <a href="##" class="d-inline-block py-3">Mastering Watercolor Painting from Beginner</a>

                            <div class="course_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                    </svg>

                                    <div class="lessons">9 Lessons</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                    <div class="students">50 Students</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0">

                        <img width="300" :src="getImageUrl('../assets/img/artist-course-07-480x480.jpg')" alt="">

                        <div class="card-body">

                            <div class="price">
                                $25.00
                            </div>
                            <!-- /.price -->

                            <a href="##" class="d-inline-block py-3">The Art & Scienze of Drawing</a>

                            <div class="course_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                    </svg>

                                    <div class="lessons">4 Lessons</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                    <div class="students">50 Students</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0">

                        <img width="300" :src="getImageUrl('../assets/img/artist-course-01-480x480.jpg')" alt="">

                        <div class="card-body">

                            <div class="price">
                                $22.00
                            </div>
                            <!-- /.price -->

                            <a href="##" class="d-inline-block py-3">The Colored Pencil Drawing Course</a>

                            <div class="course_info d-flex align-items-center gap-4">

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                                    </svg>

                                    <div class="lessons">6 Lessons</div>

                                </div>

                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path
                                            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                    </svg>

                                    <div class="students">50 Students</div>

                                </div>

                            </div>
                            <!-- /.course_info -->

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

            <div class="text-center py-5">
                <a class="btn d-inline-flex align-items-center gap-1" href="##">
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

    a {
        font-size: 1.25em;
        text-decoration: none;
        font-size: bold;
        color: black;

        &:hover {
            text-decoration: underline;
        }
    }

    .price {
        color: $mc_warning;
        font-size: 1.15rem;
        font-weight: bold;
    }

    .course_info {
        color: #808080;
        font-size: 0.8rem;

        svg {
            filter: invert(55%) sepia(0%) saturate(69%) hue-rotate(225deg) brightness(91%) contrast(86%);
        }
    }

    a.btn {
        color: $mc_warning;
        font-weight: bold;
        background-color: #ef703130;
        padding: 0.75rem 2.5rem;

        svg {
            filter: invert(72%) sepia(46%) saturate(6626%) hue-rotate(340deg) brightness(97%) contrast(94%);
        }
    }

    .card:hover {
        .card-body {
            border: 2px solid $mc_warning;
            margin-top: -2rem;
            background-color: white;
        }
    }

}
</style>