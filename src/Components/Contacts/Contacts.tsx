import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <h2 className="card-title">Contacts</h2>
      <div className="contacts-container">
        <h3>Name: Justinas Puzas</h3>
        <h3>Email: justinaspuzas00@gmail.com</h3>
        <h3>Phone: +370 61739176</h3>
      </div>
      <h2 className="card-title">Socials</h2>
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
        <a href="https://github.com/JustinasPuzas" target="_blank">
          <img className="github-icon" src="/githubLogo.png" alt="github" />
        </a>
      </div>
    </>
  );
};

export default Contacts;
