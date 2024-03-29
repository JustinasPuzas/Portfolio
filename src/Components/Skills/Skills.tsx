import DialogWindow from "../Dialog/Dialog";
import Github from "./Github/Github";
import Udemy from "./Udemy/Udemy";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import Gallery from "./Gallery/Gallery";

import "./Skills.css";

const REACT_COURSES = [
  {
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is not limited to web applications.",
    certificateURL:
      "https://www.udemy.com/certificate/UC-6b8f1189-109e-42d2-9c69-10a2c66878a3/",
    certificateImg:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-6b8f1189-109e-42d2-9c69-10a2c66878a3.jpg",
  },
];

const PYTHON_COURSES = [
  {
    url: "https://www.udemy.com/course/complete-python-developer-zero-to-mastery",
    name: "Complete Python Developer in 2022: Zero to Mastery",
    description:
      "In this course i learned the basics of programming, data structures, and algorithms. Also i learned how to write programs and how to use the Python language.",
    certificateURL:
      "https://www.udemy.com/certificate/UC-e5e77c21-4b9e-49e9-a9d9-8aa5ad71c42d/",
    certificateImg:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-e5e77c21-4b9e-49e9-a9d9-8aa5ad71c42d.jpg",
  },
];

const TENSORFLOW_COURSES = [
  {
    url: "https://www.udemy.com/course/tensorflow-developer-certificate-machine-learning-zero-to-mastery/",
    name: "TensorFlow - Zero to Mastery",
    description:
      "TensorFlow is a high-level machine learning library for tensorflow.js. It is a framework for building machine learning models and is used by companies like Google, Facebook, and Microsoft.",
    certificateURL:
      "https://www.udemy.com/certificate/UC-a6c6b6b8-5405-49e7-af3e-b8509cd6a614/",
    certificateImg:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-a6c6b6b8-5405-49e7-af3e-b8509cd6a614.jpg",
  },
];

const TYPESCRIPT_GITHUB = [
  {
    name: "BlackJack",
    url: "https://github.com/JustinasPuzas/blackJack",
    description: "A BlackJack game based on OOP principles",
  },
  {
    name: "Note Taker",
    url: "https://github.com/JustinasPuzas/notes-back-end",
    description: "A note taker application backend",
  },
  {
    name: "Lilu music bot backend",
    url: "https://github.com/JustinasPuzas/edv-back-end",
    description:
      "Backend for the Lilu music bot connecting dashboard with bot client",
  },
];

const REACT_GITHUB = [
  {
    name: "My Portfolio",
    url: "https://github.com/JustinasPuzas/Portfolio",
    description: "My portfolio website code",
  },
  {
    name: "Note Taker",
    url: "https://github.com/JustinasPuzas/notes-front-end",
    description: "A note taker application frontend",
  },
  {
    name: "Lilu music bot frontend",
    url: "https://github.com/JustinasPuzas/edv-front-end",
    description: "DashBoard for the Lilu music bot",
  },
];

const DISCORDJS_GITHUB = [
  {
    name: "Tairi Discord Bot",
    url: "https://github.com/JustinasPuzas/tairi",
    description:
      "A simple discord bot for reputation system and displaying user profiles with collected data",
  },
  {
    name: "Lilu Music Bot",
    url: "https://github.com/JustinasPuzas/edv-radio-end",
    description:
      "Discord bot for playing music with multiple guild support and dashboard",
  },
];

const ADOBE_ILLUSTRATOR = [
  {
    url: "https://cdn.discordapp.com/attachments/885163400995414056/953664003966644254/augis.png",
    title: "=== Augustinas ===",
    rows: 3,
    cols: 3,
  },
  {
    url: "https://cdn.discordapp.com/attachments/885163400995414056/952596903449731162/Ronaldas.png",
    title: "=== Ronaldas ===",
    rows: 3,
    cols: 2,
  },
];

const Skills = () => {
  return (
    <>
      <div className="title-container">
        <HandymanOutlinedIcon fontSize="large" />
        <h2 className="card-title">Skills</h2>
      </div>
      <div id="about-me" className="card-content-grid-body">
        <p className="card-paragraph">Programing Languages</p>
        <div className="card-content-grid">
          <DialogWindow
            title="TypeScript"
            text="I created a back-end services for storing notes and course system using MERN stack, a BlackJack game based on OOP principles and worked on multiple discord bots for guild moderation and adding unique features."
            imgLink="/logo/typescript/logo512.webp"
            github
          >
            <Github repositorys={TYPESCRIPT_GITHUB} />
          </DialogWindow>
          <DialogWindow
            title="JavaScript"
            text="Following Udemy courses and Curriculum. Created web applications: tic tac toe game, restaurant webpage and more also acquired expieriance in various frameworks."
            imgLink="/logo/javascript/logo512.webp"
            vilniusTech
            linkedIn
          />
          <DialogWindow
            title="Python"
            text={`Following Udemy courses. Got introduced in web application development with flask, learned basics of automation and testing and got familiar with machine learning and data science witch I followed up with separate course on TensorFlow.`}
            imgLink="/logo/python/logo512.webp"
            vilniusTech
            udemy
          >
            <Udemy courses={PYTHON_COURSES} />
          </DialogWindow>
          <DialogWindow title="C++" text="" imgLink="/logo/cpp/logo512.webp" />
        </div>
        <p className="card-paragraph">FrameWorks and Libraries</p>
        <div className="card-content-grid">
          <DialogWindow
            title="React"
            text=""
            imgLink="/logo512.png"
            udemy
            github
          >
            <Github repositorys={REACT_GITHUB} />
            <Udemy courses={REACT_COURSES} />
          </DialogWindow>
          <DialogWindow
            title="Discord js"
            text=""
            imgLink="https://discord.js.org/static/djs_logo.png"
            github
          >
            <Github repositorys={DISCORDJS_GITHUB} />
          </DialogWindow>
          <DialogWindow
            title="TensorFlow"
            text=""
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"
            vilniusTech
            udemy
          >
            <Udemy courses={TENSORFLOW_COURSES} />
          </DialogWindow>
          <DialogWindow title="Node js" text="" imgLink="/nodejsLogo.png" />
          <DialogWindow
            title="GraphQL"
            text=""
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
          />
          <DialogWindow title="MongoDB" text="" imgLink="mongoDBLogo.png" linkedIn />
          <DialogWindow
            title="Chai"
            text=""
            imgLink="https://avatars.githubusercontent.com/u/1515293"
          />
          <DialogWindow
            title="MUI"
            text=""
            imgLink="https://mui.com/static/logo.png"
          />
        </div>
        <p className="card-paragraph">Other</p>
        <div className="card-content-grid">
          <DialogWindow
            title="Figma"
            text="During UI/UX design curriculum I used Figma to create wireframes and prototypes. Also prototyped my Portfolio website."
            imgLink="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            vilniusTech
          />
          <DialogWindow
            title="Adobe Illustrator"
            text="During Graphic design curriculum I used Adobe Illustrator to remake provided icons with vectors, and created my own icons, logos and ilustrations."
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png"
            vilniusTech
            gallery
          >
            <Gallery pictures={ADOBE_ILLUSTRATOR} />
          </DialogWindow>
          <DialogWindow
            title="Adobe Photoshop"
            text=""
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png"
          />
          <DialogWindow
            title="Adobe After Effects"
            text=""
            imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1051px-Adobe_After_Effects_CC_icon.svg.png"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
