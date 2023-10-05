import { reactive } from "vue";

export const state = reactive({

    nav_links: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],

    cardCoaching: [
        {
            title: 'Online Coures',
            content: ' Online art coasching now offers you s very powerful way to redesign you artist mind.',
            imgPath: 'artist-box-image-01.png',
            id: 1
        },
        {
            title: 'One to One',
            content: 'Gettin the necessary clarity about the current state to help you imrove your ability.',
            imgPath: 'artist-box-image-02.png',
            id: 2
        },
        {
            title: 'Anywhere',
            content: 'Access to valurable and portable program which allow you to setup and live anywhere you want.',
            imgPath: 'artist-box-image-03.png',
            id: 3
        },
        {
            title: 'On Time',
            content: "Punctually is our top priority because it's an essential criteria to assess a program quality.",
            imgPath: 'artist-box-image-04.png',
            id: 4
        },
    ],

    cardTestimonial: [
        {
            title: 'Professional team of specialist and passionate mentors at reach',
            content: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students',
            avatarPath: 'artist-testimonial-avatar-01.jpg',
            name: 'Madley Pondor',
            job: '/ IT Specialist',
            id: 0
        },

        {
            title: "It's a choice of quality for people with special needs",
            content: "I'm a very strict person so I require everything to be organized and neat. Then,I'll be able to make things right and shine. MaxCoach guys just got me",
            avatarPath: 'artist-testimonial-avatar-02.jpg',
            name: 'Florence Themes',
            job: '/ Multimedia Admin',
            id: 1
        },

        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat impedit, rerum explicabo delectus necessitatibus dolores magnam',
            avatarPath: 'artist-testimonial-avatar-03.jpg',
            name: 'Lorem, ipsum',
            job: '/ Lorem',
            id: 2
        },

        {
            title: 'High level of efficiency scientific teaching methods',
            content: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
            avatarPath: 'artist-testimonial-avatar-04.jpg',
            name: 'Mina Hollace',
            job: '/ Freelancer',
            id: 3
        }
    ],

    activeTestimonial: 0,
})