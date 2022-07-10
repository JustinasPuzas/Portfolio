import SchoolOutlined from "@mui/icons-material/SchoolOutlined";

import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="title-container">
        <SchoolOutlined fontSize="large" />
        <h2 className="card-title">Education</h2>
      </div>
      <div className="education-container">
        <h3 className="education-title">Higher Education</h3>
        <div className="education-item">
          <div className="education-logo vilniusTech-logo" />
          <div className="education-card">
            <h4 className="education-subtitle">VilniusTech University</h4>
            <h5 className="education-subtitle">
              Study Program - Software Engineering
            </h5>
            <h5 className="education-subtitle">2019 - currently</h5>
          </div>
        </div>
        <h3 className="education-title">Secondary Education</h3>
        <div className="education-item">
          <img
            className="education-logo"
            src="/valkininkuGimnazijaLogo.png"
            alt="valkininku gimnazija logo"
          />
          <div className="education-card">
            <h4 className="education-subtitle">
              Varėnos raj. Valkininkų gymnasium
            </h4>
            <h5 className="education-subtitle">2007 - 2019</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
