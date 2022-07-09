import { NavLink} from 'react-router-dom';
import "./NavBar.css";
import { useLocation } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function NavBar() {


  const location = useLocation();

  const scroll = (id: string) => {
    const section = document.querySelector( `${id}` );
    if(section)
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <div className={location.pathname === "/"? "hidden" : "navbar"}>
      <NavLink to="/"><ArrowBackIosNewIcon fontSize='large'/></NavLink>
      <ul>
        <li>
          <NavLink className={({isActive}) => isActive ? "active" : undefined} onClick={() => scroll("#about-me")} to="/about#about-me">About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "active" : undefined} onClick={() => scroll("#skills")} to="/about#skills">Skills</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "active" : undefined} onClick={() => scroll("#education")} to="/about#education">Education</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "active" : undefined} onClick={() => scroll("#contacts")} to="/about#contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
}
