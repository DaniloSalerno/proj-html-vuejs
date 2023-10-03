<script>
export default {
    name: 'AppTestimonials',
    methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href
        }
    }
}
</script>

<template>
    <section id="testimonials">

        <div class="text-center py-5">
            <h2>Testimonials</h2>
            <h3 class="fw-bold">Why do people love me?</h3>
        </div>

        <div class="px-5">

            <div class="row row-cols-3">

                <div class="col">

                    <div class="card border-0">

                        <div class="card-body px-4">

                            <h5 class="fw-bold">
                                Professional team of specialist and passionate mentors at reach
                            </h5>

                            <div class="py-4">
                                I need to get a certification for English proficiency and MaxCoach is my best choice. Their
                                tutors are smart and professional when dealing with students
                            </div>

                            <div class="d-flex">

                                <img class="avatar" width="60"
                                    :src="getImageUrl('../assets/img/artist-testimonial-avatar-01.jpg')" alt="">

                                <div class="ps-3">
                                    <div class="fw-bold">Madley Pondor</div>
                                    <div class="text-secondary">/ IT Specialist</div>
                                </div>

                            </div>

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col active">

                    <div class="card border-0">

                        <div class="card-body px-4">

                            <h5 class="fw-bold">
                                It's a choice of quality for people with special needs
                            </h5>

                            <div class="py-4">
                                I'm a very strict person so I require everything to be organized and neat. Then,I'll ben
                                able to make things right and shine. MaxCoach guys just got me
                            </div>

                            <div class="d-flex">

                                <img class="avatar" width="60"
                                    :src="getImageUrl('../assets/img/artist-testimonial-avatar-02.jpg')" alt="">

                                <div class="ps-3">
                                    <div class="fw-bold">Florence Themes</div>
                                    <div class="text-secondary">/ Multimedia Admin</div>
                                </div>

                            </div>

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col d-none">

                    <div class="card border-0">

                        <div class="card-body px-4">

                            <h5 class="fw-bold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h5>

                            <div class="py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat impedit, rerum
                                explicabo delectus necessitatibus dolores magnam, ex dolor velit vel odit sequi ad,
                                doloribus non mollitia! Nihil, rerum fuga?
                            </div>

                            <div class="d-flex">

                                <img class="avatar" width="60"
                                    :src="getImageUrl('../assets/img/artist-testimonial-avatar-03.jpg')" alt="">

                                <div class="ps-3">
                                    <div class="fw-bold">Lorem, ipsum.</div>
                                    <div class="text-secondary">/ Lorem</div>
                                </div>

                            </div>

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->

                <div class="col">

                    <div class="card border-0">

                        <div class="card-body px-4">

                            <h5 class="fw-bold">
                                High level of efficiency scientific teaching methods
                            </h5>

                            <div class="py-4">
                                I am free to learn at my own pace, follow my own schedule and choose the subject I want to
                                learn from the syllabus. Great study portal for people like me.
                            </div>

                            <div class="d-flex">

                                <img class="avatar" width="60"
                                    :src="getImageUrl('../assets/img/artist-testimonial-avatar-04.jpg')" alt="">

                                <div class="ps-3">
                                    <div class="fw-bold">Mina Hollace</div>
                                    <div class="text-secondary">/ Freelancer</div>
                                </div>

                            </div>

                        </div>
                        <!-- /.card-body -->

                    </div>
                    <!-- /.card -->

                </div>
                <!-- /.col -->



            </div>
            <!-- /.row row-cols-3 -->

            <div class="pages d-flex justify-content-center align-items-center gap-3">
                <div class="active"></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <!-- /.pages -->

        </div>

    </section>
    <!-- /#testimonials -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#testimonials {
    height: 740px;
    background-color: $mc_light;

    .avatar {
        aspect-ratio: 1/1;
        border-radius: 50%;
    }

    .col {
        opacity: 0.2;
    }

    .col.active {
        opacity: 1;
    }

    .pages {
        padding: 5rem 0;

        div {
            display: flex;
            align-content: center;
        }
    }

    .pages>div:before {

        content: '';
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: grey;

    }

    .pages>div.active:before {

        content: '';
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: $mc_dark;

    }
}
</style>