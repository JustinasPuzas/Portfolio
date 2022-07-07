import { useState } from "react";
import DialogWindow from "../Dialog/Dialog";

const REACT_COURSE = {
    courseLink: "https://www.udemy.com/course-dashboard-redirect/?course_id=1362070",
    courseName: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    courseSummary: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is not limited to web applications.",
    courseImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    courseCertificate: "https://www.udemy.com/certificate/UC-6b8f1189-109e-42d2-9c69-10a2c66878a3/",
    courseCertificateImg: "https://udemy-certificate.s3.amazonaws.com/image/UC-6b8f1189-109e-42d2-9c69-10a2c66878a3.jpg"
}

const TENSORFLOW_COURSE ={
    courseLink: "https://www.udemy.com/course/tensorflow-developer-certificate-machine-learning-zero-to-mastery/",
    courseName: "TensorFlow - Zero to Mastery",
    courseSummary: "TensorFlow is a high-level machine learning library for tensorflow.js. It is a framework for building machine learning models and is used by companies like Google, Facebook, and Microsoft.",
    courseImg: "/logo512.png",
    courseCertificate: "https://www.udemy.com/certificate/UC-a6c6b6b8-5405-49e7-af3e-b8509cd6a614/",
    courseCertificateImg: "https://udemy-certificate.s3.amazonaws.com/image/UC-a6c6b6b8-5405-49e7-af3e-b8509cd6a614.jpg",
}

const GITHUB = [{
    githubName: "BlackJack",
    githubLink: "https://github.com/JustinasPuzas/blackJack",
    description: "A BlackJack game based on OOP principles"
}]


const Skills = () => {
  return (
    <>
      <h2 className="card-title">Skills</h2>
      <div className="card-content-grid-body">
        <p className="card-paragraph">Programing Languages</p>
        <div className="card-content-grid">
          <DialogWindow
            title="TypeScript"
            text="I created a back-end services for storing notes and course system using MERN stack, a BlackJack game based on OOP principles and worked on multiple discord bots for guild moderation and adding unique features."
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
            github={GITHUB}
          />
          <DialogWindow
            title="Python"
            text={`Following Udemy courses. Got introduced in web application development with flask, learned basics of automation and testing and got familiar with machine learning and data science witch I followed up with separate course on TensorFlow.`}
          />
          <DialogWindow
            title="JavaScript"
            text="Following Udemy courses and Curriculum. Created web applications: tic tac toe game, restaurant webpage and more also acquired expieriance in technologies listed below."
          />
          <DialogWindow title="C++" text="Following curiculum learned to " />
        </div>
        <p className="card-paragraph">FrameWorks and Libraries</p>
        <div className="card-content-grid">
          <DialogWindow title="React" text="React" courseDetails={REACT_COURSE}/>
          <DialogWindow title="TypeScript" text="TypeScript" />
          <DialogWindow title="TypeScript" text="TypeScript" />
          <DialogWindow title="TensorFlow" text="TensorFlow" courseDetails={TENSORFLOW_COURSE} />
        </div>
        <p className="card-paragraph">Other</p>
        <div className="card-content-grid">
          <DialogWindow title="TypeScript" text="TypeScript" />
          <DialogWindow title="TypeScript" text="TypeScript" />
          <DialogWindow title="TypeScript" text="TypeScript" />
          <DialogWindow title="TypeScript" text="TypeScript" />
        </div>
        <div className="card-content-grid">
          <DialogWindow title="TypeScript" text="TypeScript" />
          <DialogWindow title="TypeScript" text="TypeScript" />
          <DialogWindow title="TypeScript" text="TypeScript" />
          <DialogWindow title="TypeScript" text="TypeScript" />
        </div>
      </div>
    </>
  );
};

export default Skills;
