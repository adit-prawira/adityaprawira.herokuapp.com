const projects = [
    {
        title: "Personal Portfolio React Web App",
        startPeriod: "12/2020",
        endPeriod: "Present",
        descriptions: [
            "Developing a personal portfolio with React.",
            "Develop an interactive web app for a personal introduction.",
            "Improve experiences and familiarities with React, Javascript, CSS, HTML, and UI/UX design.",
        ],
        type: "programming",
    },
    {
        title: "Unimelb B-SCI Course Planner React Web App Project",
        startPeriod: "11/2020",
        endPeriod: "Present",
        descriptions: [
            "Collaboration project in developing a web app application for the University of Melbourne's Bachelor of Science program courses related to the major taken.",
            "A course planner that utilizes a flowchart system operation.",
            "Utilize REST principal in accessing the University of Melbourne's Bachelor of Science courses and majors (e.g. accessing subjects API data).",
            "Utilize Javascript, HTML, CSS, and React in developing the web app.",
        ],
        type: "programming",
    },
    {
        title: "Artist Express Web App Development Project",
        startPeriod: "10/2020",
        endPeriod: "12/2020",
        descriptions: [
            "Building an Express.js web app by utilizing HTML, EJS, CSS (Custom style sheet, and Bootstrap 5 ), and JavaScript.",
            "Develop a front-end and back-end client-server.",
            "Develop a database for all registered users/owners, reviews, and all available music albums via MongoDB/mongoose ODM database (NoSQL database).",
            "Enhance programming knowledge and experiences through a web application development.",
            "Personal project to expand my audience and network.",
            "A website that introduces my self as a music producer.",
        ],
        type: "programming",
    },
    {
        title: "A Two-Level Tower Game Project (Java OOP)",
        startPeriod: "05/2020",
        endPeriod: "06/2020",
        descriptions: [
            "Develop a two-level tower game by utilizing Java language and bagel library.",
            "Design a UML diagram of the proposed game design.",
            "Utilize and integrate object-oriented programming.",
            "Mathematical modelling applied for some motions in the game.",
        ],
        type: "game",
    },
    {
        title: "Monthly Music Single and EP Album Project",
        startPeriod: "04/2020",
        endPeriod: "Present",
        descriptions: [
            "Produce and release a single or an EP project each month.",
            "Receiving offers to be promoted by several musical blogs and labels.",
        ],
        type: "music",
    },
    {
        title: "Warman Project",
        startPeriod: "03/2020",
        endPeriod: "05/2020",
        descriptions: [
            "A team of 4 that construct and develop a competitive autonomous device to compete in Warman Competition 2020.",
            "The device was appreciated and predicted to win the competition or at least secure a top 5 position",
            "A productive and efficient team collaboration project",
        ],
        type: "engineering",
    },
    {
        title: "Rainfall Cycle",
        startPeriod: "05/2019",
        endPeriod: "06/2019",
        descriptions: [
            "Develop a data structure algorithm to simulate climate change data analysis (C programming languages)",
            "Statistical analysis annual rainfall cycle",
            "Utilize Kendall's tau mathematical model to compute trend analysis",
            "Data representation to plot climate changes in data analysis",
        ],
        type: "programming",
    },
    {
        title: "Drone Delivery Path Optimization",
        startPeriod: "04/2019",
        endPeriod: "05/2019",
        descriptions: [
            "Simulate drones delivery data with the C programming language",
            "Integrate mathematical modeling to calculate battery consumption depending on the package that is delivered",
            "Mathematical modeling to develop algorithm on deciding the most optimum delivery path with least battery consumptions",
            "Develop sorting algorithms for multiple purposes",
        ],
        type: "programming",
    },
    {
        title: "Art Exhibition",
        startPeriod: "06/2016",
        endPeriod: "03/2017",
        descriptions: [
            "Develop 7 artworks for Sekolah Pelita Harapan Sentul City (SPH SC) art exhibition event.",
            "Completed 2 sculptures, 3 paintings, and 2 photographs.",
            "Improving technical skills and disciplines.",
        ],
        type: "art",
    },
];

const experiences = [
    {
        title: "Summer Program Student Mentor",
        companyName: "Sekolah Pelita Harapan",
        type: "Internship",
        startPeriod: "05/2015",
        endPeriod: "06/2015",
    },
    {
        title: "Undergraduate Student",
        companyName: "Univeristy of Melbourne",
        type: "Full-time",
        startPeriod: "07/2017",
        endPeriod: "07/2020",
    },
    {
        title: "Music Producer (Azure Gaze)",
        companyName: "DistroKid",
        type: "Self-employed",
        startPeriod: "04/2020",
        endPeriod: "Present",
    },
];

const educations = [
    {
        companyName: "International Baccalaureate",
        degree: "High School Diploma",
        startYear: "2014",
        endYear: "2017",
    },
    {
        companyName: "University of Melbourne",
        degree: "Bachelor of Science - BS, Mechanical Systems",
        startYear: "2017",
        endYear: "2020",
    },
    {
        companyName: "RMIT University",
        degree: "Master of Engineering, Robotics and Mechatronics Engineering",
        startYear: "2020",
        endYear: "Present",
    },
];

module.exports = {
    projects,
    experiences,
    educations,
};
