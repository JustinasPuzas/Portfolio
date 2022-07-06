import AboutMe from "../../Components/AboutMe/AboutMe";
import Card, {CardProps} from "../../Components/Card/Card";

import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <div className="about-body">
        <Card><AboutMe /></Card>
        <Card><div>Skills</div></Card>
        <Card><div >Experience</div></Card>
      </div>
      <div className="home-page-circle-1"></div>
      <div className="home-page-circle-2"></div>
      <div className="home-page-circle-3"></div>
      <div className="home-page-circle-4"></div>
      </>
  );
}
