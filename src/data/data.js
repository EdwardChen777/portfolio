// import WorkIm from '../public/workImg.jpeg'
// import WorkIm from '../assets/workImg.jpeg'
// import RealEst from '../public/realestate.jpg'
import Insider from '../imgs/insdr.png'
import Healome from '../imgs/healome.png'
import FirstTee from '../imgs/firsttee.png'

export const data=[
    {
        id:1,
        name:"First-Tee Pittsburgh",
        description: "A web application for First-Tee coaches to send messages to program participants via both phone and email.",
        image:FirstTee,
        github:"https://github.com/EdwardChen777/First_Tee_Notifications_System",
        live:"",
        youtube:"",
        skills: [
            "Node",
            "Express",
            "React",
            "Salesforce"
        ]
    },
    {
        id:2,
        name:"iNSDR",
        description: "A mobile application that provides insider trading information for the public.",
        image:Insider,
        github:"https://github.com/EdwardChen777/Team15-App-V2",
        live:"",
        youtube:"",
        skills: [
            "Swift",
            "SwiftUI",
            "Firebase",
            "Python",
            "API",
        ]
    },
    {
        id:3,
        name:"Healome Web App",
        description: "A full-stack application that stores user information and provide subscription based services.",
        image:Healome,
        github:"https://github.com/EdwardChen777/HealomeWebApp",
        live:"",
        youtube:"https://drive.google.com/file/d/1X2gzN62V_xAJaj-IFhwgJ0ybcm4XxOcO/view?usp=sharing",
        skills: [
            "Ruby on Rails",
            "Cognito",
            "Stripe"
        ]
    },

]

export const jobs = [
    {
        id: 1,
        company: "Healome",
        companyDescription: "Tracks biomarkers and provides healthy routines",
        role: "Software Engineer Intern",
        time: "Jun 2022 - Aug 2022",
        description: [
            "Worked with Ruby on Rails to develop a full stack application to track biomarkers data and promote product features",
            "Implemented Amazon Cognito for login process and Stripe for subscription based checkout flows"
        ]

    },
    {
        id: 2,
        company: "re:Bloom",
        companyDescription: "Help local minority owned business increase online presence",
        role: "Project Manager",
        time: "Sep 2021 - Aug 2022",
        description: [
            "Worked with Figma, Wix, and Squarespace to develop front-end features for local minority-owned businesses",
            "Led 3 different teams through prototyping and implementing unique websites that improved bounce rate by an average of 43%"
        ]
    },
    {
        id: 3,
        company: "Sustainible",
        companyDescription: "Analytics for small businesses to achieve sustainable growth",
        role: "Software Developer Intern",
        time: "Jan 2022 - Apr 2022",
        description: [
            "Worked with Python, BeautifulSoup, Pandas data frame, and Google Trends API to implement web scrapping algorithms",
            "Developed business analytic features for over 1000 businesses to provide data on core KPIs including churn rate, customer retention rate, and industry growth rate"
        ]
    }
]