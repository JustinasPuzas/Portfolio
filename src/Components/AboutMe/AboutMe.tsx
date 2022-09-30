import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="title-container">
        <InfoOutlinedIcon fontSize="large" />
        <h2 className="card-title">About Me</h2>
      </div>
      <p className="card-paragraph">
        I am a 4th year student of the Vilnius Tech University Software
        Engineering, looking for a fulltime job in frontend or backend development and further career opportunities.
        I am quick learner capable of managing time and taking responsibility.
      </p>
    </>
  );
};

export default AboutMe;
