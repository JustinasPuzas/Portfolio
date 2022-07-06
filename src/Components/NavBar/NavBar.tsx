import { NavLink} from 'react-router-dom';
import "./NavBar.css";
import { useLocation } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function NavBar() {


  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={location.pathname === "/"? "hidden" : "navbar"}>
      <NavLink to="/"><ArrowBackIosNewIcon fontSize='large'/></NavLink>
      <ul>
        <li>
          <NavLink className={({isActive}) => isActive ? "active" : undefined} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "active" : undefined} to="/works">Works</NavLink>
        </li>
      </ul>
    </div>
  );
}
