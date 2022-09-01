import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";

import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="title-container">
        <ContactPhoneOutlinedIcon fontSize="large" />
        <h2 className="card-title">Contacts</h2>
      </div>
      <div className="contacts-container">
        <div
          onClick={() => {
            navigator.clipboard.writeText("Justinas Puzas");
          }}
        >
          <h3>Name: Justinas Puzas</h3>
          <Tooltip title="Copy!" placement="top-end">
            <ContentCopyIcon />
          </Tooltip>
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText("justinaspuzas00@gmail.com");
          }}
        >
          <h3>Email: justinaspuzas00@gmail.com</h3>
          <Tooltip title="Copy!" placement="top-end">
            <ContentCopyIcon />
          </Tooltip>
        </div>
        {/* <div
          onClick={() => {
            navigator.clipboard.writeText("+37061739176");
          }}
        >
          <h3>Phone: +370 61739176</h3>
          <Tooltip title="Copy!" placement="top-end">
            <ContentCopyIcon />
          </Tooltip>
        </div> */}
      </div>
      <h2 className="card-title socials-title">Socials</h2>
      <div className="socials-container">
        <a
          href="https://www.linkedin.com/in/justinas-puzas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="linkedIn-icon"
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/JustinasPuzas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="github-icon" src="/githubLogo.png" alt="github" />
        </a>
      </div>
    </>
  );
};

export default Contacts;
