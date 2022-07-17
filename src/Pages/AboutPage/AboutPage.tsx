import AboutMe from "../../Components/AboutMe/AboutMe";
import Card from "../../Components/Card/Card";
import Skills from "../../Components/Skills/Skills";
import Education from "../../Components/Education/Education";
import Contacts from "../../Components/Contacts/Contacts";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <div className="about-body">
        <Card id="about-me"><AboutMe /></Card>
        <Card id="skills"><Skills /></Card>
        <Card id="education"><Education /></Card>
        <Card id="contacts"><Contacts /></Card>
      </div>
      <div className="home-page-circle-1"></div>
      <div className="home-page-circle-2"></div>
      <div className="home-page-circle-3"></div>
      <div className="home-page-circle-4"></div>
      </>
  );
}
