import { reactive } from "vue";

export const state = reactive({

    nav_links: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],

    cardCoaching: [
        {
            title: 'Online Coures',
            content: ' Online art coaching now offers you s very powerful way to redesign you artist mind.',
            imgPath: 'artist-box-image-01.png',
            id: 1
        },
        {
            title: 'One to One',
            content: 'Gettin the necessary clarity about the current state to help you improve your ability.',
            imgPath: 'artist-box-image-02.png',
            id: 2
        },
        {
            title: 'Anywhere',
            content: 'Access to valuable and portable program which allow you to setup and live anywhere you want.',
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

    cardCourse: [
        {
            title: 'The Acrylic Painting Academy',
            price: '$18.00',
            imgPath: 'artist-course-08-480x480.jpg',
            lessons: '4 Lessons',
            students: '50 Students'
        },
        {
            title: 'Drawing and Shalding: Complete Course',
            price: '$21.00',
            imgPath: 'artist-course-07-480x480.jpg',
            lessons: '14 Lessons',
            students: '50 Students'
        },
        {
            title: 'The Color Theory for Digital Artist',
            price: '$19.00',
            imgPath: 'artist-course-06-480x480.jpg',
            lessons: '7 Lessons',
            students: '50 Students'
        },
        {
            title: 'Ultimate Guide to Digital Sketching for Beginner',
            price: '$35.00',
            imgPath: 'artist-course-05-480x480.jpg',
            lessons: '14 Lessons',
            students: '50 Students'
        },
        {
            title: 'Portrait Drawing The Wmart Way',
            price: '$19.00',
            imgPath: 'artist-course-04-480x480.jpg',
            lessons: '2 Lessons',
            students: '50 Students'
        },
        {
            title: 'Mastering Watercolor Painting from Beginner',
            price: '$19.00',
            imgPath: 'artist-course-03-480x480.jpg',
            lessons: '9 Lessons',
            students: '50 Students'
        },
        {
            title: 'The Art & Scienze of Drawing',
            price: '$25.00',
            imgPath: 'artist-course-02-480x480.jpg',
            lessons: '4 Lessons',
            students: '50 Students'
        },
        {
            title: 'The Colored Pencil Drawing Course',
            price: '$22.00',
            imgPath: 'artist-course-01-480x480.jpg',
            lessons: '6 Lessons',
            students: '50 Students'
        }
    ],

    cardEvent: [
        {
            date: 'NOV 22, 2020',
            title: 'Storytelling Workshop',
            imgPath: 'artist-event-04-250x300.jpg',
            location: 'Texas, US',
            text_position: 'right'
        },

        {
            date: '0CT 10, 2020',
            title: 'Painting Art Contest 2020',
            imgPath: 'artist-event-03-250x300.jpg',
            location: 'New York, US',
            text_position: 'right'
        },

        {
            date: 'NOV 23, 2020',
            title: 'International Art Fair 2020',
            imgPath: 'artist-event-02-250x300.jpg',
            location: 'Hamburg, Germany',
            text_position: 'left'
        },

        {
            date: 'DEC 15, 2020',
            title: 'Street Performance: Call for Artist',
            imgPath: 'artist-event-01-250x300.jpg',
            location: 'Illinois, US',
            text_position: 'left'
        },

    ],

    footerExplore: [
        {
            name: 'Start here',
            href: '##'
        },
        {
            name: 'Success story',
            href: '##'
        },
        {
            name: 'Blog',
            href: '##'
        },
        {
            name: 'Courses',
            href: '##'
        },
        {
            name: 'Contact us',
            href: '##'
        },
    ],


    footerInformation: [
        {
            name: 'Membership',
            href: '##'
        },
        {
            name: 'Purchase guide',
            href: '##'
        },
        {
            name: 'Privacy policy',
            href: '##'
        },
        {
            name: 'Terms of services',
            href: '##'
        }
    ],

    activeTestimonial: 0,

    eventTimer: true,
})