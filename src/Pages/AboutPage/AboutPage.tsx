import AboutMe from "../../Components/AboutMe/AboutMe";
import Card, {CardProps} from "../../Components/Card/Card";
import Skills from "../../Components/Skills/Skills";

import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <div className="about-body">
        <Card id="about-me"><AboutMe /></Card>
        <Card id="skills"><Skills /></Card>
        <Card id="education"><div >Education</div></Card>
        <Card id="contacts"><div >Contacts</div></Card>
      </div>
      <div className="home-page-circle-1"></div>
      <div className="home-page-circle-2"></div>
      <div className="home-page-circle-3"></div>
      <div className="home-page-circle-4"></div>
      </>
  );
}
