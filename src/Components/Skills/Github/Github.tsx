import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import "./Github.css";
interface GithubProps {
  repositorys: GithubRepository[];
}

interface GithubRepository {
  name: string;
  url: string;
  description: string;
}

const Github = ({ repositorys }: GithubProps) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <h2 className="dialog-title">Github</h2>
      {repositorys.map(({ name, url, description }) => (
        <>
          <ListItem onClick={() => handleClick(url)} button key={url}>
            <img
              className="dialog-github-logo"
              src="/githubLogo.png"
              alt={`github logo`}
            />
            <div className="dialog-list-text">
              <h3 className="dialog-list-title">{name}</h3>
              <p className="dialog-list-description">{description}</p>
            </div>
          </ListItem>
          <Divider />
        </>
      ))}
    </>
  );
};

export default Github;
