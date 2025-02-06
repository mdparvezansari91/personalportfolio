const userInfo = {
    firstName: "Mohammad",
    lastName: "Ansari",
    email: "Mohammadparvezansari91@gmail.com",
    phone: "+971554073246",
    skills: {
        programmingLanguages: ["JavaScript", "TypeScript", "Python", "C++"],
        frontendFrameworks: ["React", "Next.js", "React Native"],
        backendFrameworks: ["Node.js", "Django"],
        databaseSystems: ["MongoDB"],
        versionControl: ["Git", "GitHub", "GitLab"],
        testingFrameworks: ["Jest", "Cypress", "Playwright"],
        cloudCI_CD: ["AWS Lambda", "GitHub Actions"]
    },
    certifications: [
        {
            title: "The Complete Social Media Marketing Course",
            link: "https://alison.com/"
        },
        {
            title: "Introduction to Data Science",
            link: "https://alison.com/"
        },
        {
            title: "Fundamentals of Digital Marketing",
            link: "https://learndigital.withgoogle.com/digitalgarage"
        },
        {
            title: "Python and Django Full Stack Web Developer Bootcamp",
            link: "https://www.udemy.com/certificate/UC6c258cd0-6876-4f9d-9c4d-254c51290573/"
        }
    ],
    projects: [
        {
            title: "Careem Clone",
            description: "Developed a frontend clone of Careem using React. Deployed on Render.",
            url:"/"
        },
        {
            title: "Portfolio Website",
            description: "Showcased expertise and past projects. Deployed on Render.",
            url: "/"
        },
        {
            title: "Mobile Repair Appointment System",
            description: "Built a comprehensive appointment management app with React, Node.js, and MongoDB. Deployed on Render.",
            url: "/"
        },
        {
            title: "Shop and Blog Platform",
            description: "Developed an article publishing platform with API integrations and MongoDB. Implemented auto-publishing using Next.js.",
            url: "https://shopnblog.online/",
        }
    ],
    education: [
        "IEC University (Himachal Pradesh, India)",
        "Kalka Public School (New Delhi, India)",
        "Hamdard Public School (New Delhi, India)"
    ],
    services:{
        WebDevelopment:{
            title: "Web Development",
            value:["Nextjs", "ReactJS"]
        },
        MobileAppDevelopment:{
            title: "Mobile App Development",
            value:["React Native", "Flutter"]
        }
    }
};

export default userInfo;