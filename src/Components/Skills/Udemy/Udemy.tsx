import ListItem from "@mui/material/ListItem";

import "./Udemy.css";

interface CourseProps {
  courses: Course[];
}

interface Course {
  name: string;
  url: string;
  description: string;
  certificateURL: string;
  certificateImg: string;
}

const Udemy = ({ courses }: CourseProps) => {
  return (
    <div className="udemy-background">
      <h2 className="dialog-title">Udemy</h2>
      {courses.map(
        ({ name, url, description, certificateURL, certificateImg }) => (
          <>
            <ListItem button key={url}>
              <div onClick={() => window.open(url, "_blank")} className="dialog-list-text udemy-list-text">
                <h3 className="dialog-list-title">{name}</h3>
                <p className="dialog-list-description">{description}</p>
              </div>
              <img
                onClick={() => window.open(certificateURL, "_blank")}
                className="dialog-udemy-certificate"
                src={certificateImg}
                alt={`${name} certificate`}
              />
            </ListItem>
          </>
        )
      )}
    </div>
  );
};

export default Udemy;
