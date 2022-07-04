import { NavLink } from "react-router-dom";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="body">
      <div className="img-wrapper">
        <div className="my-image"></div>
      </div>
      <div className="text-wrapper">
        <h1 className="title">Justinas Puzas</h1>
        <span className="subtitle">Front end Developer</span>
        <ul className="buttons">
          <li>
            <NavLink to="/about" className="button">
              About
            </NavLink>
          </li>
          <li>
            <a href="pdf" className="linkButton">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="home-page-circle-1"></div>
      <div className="home-page-circle-2"></div>
      <div className="home-page-circle-3"></div>
      <div className="home-page-circle-4"></div>
    </div>
  );
}
