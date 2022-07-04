import { NavLink} from 'react-router-dom';
import "./NavBar.css";
import { useLocation } from 'react-router-dom'

export default function NavBar() {


  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={location.pathname === "/"? "hidden" : "navbar"}>
      <ul>
        <li>
          <NavLink className={({isActive}) => isActive ? "active" : undefined} to="/">Home</NavLink>
        </li>
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
