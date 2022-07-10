import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useLocation } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

export default function NavBar() {
  const location = useLocation();

  const scroll = (id: string) => {
    const section = document.querySelector(`${id}`);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={location.pathname === "/" ? "hidden" : "navbar"}>
      <NavLink to="/">
        <ArrowBackIosNewIcon fontSize="large" />
      </NavLink>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => scroll("#about-me")}
            to="/about#about-me"
          >
            <InfoOutlinedIcon fontSize="large" />
            <h3>About</h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => scroll("#skills")}
            to="/about#skills"
          >
            <HandymanOutlinedIcon fontSize="large" />
            <h3>Skills</h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => scroll("#education")}
            to="/about#education"
          >
            <SchoolOutlinedIcon fontSize="large" />
            <h3>Education</h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => scroll("#contacts")}
            to="/about#contacts"
          >
            <ContactPhoneOutlinedIcon fontSize="large" />
            <h3>Contacts</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
