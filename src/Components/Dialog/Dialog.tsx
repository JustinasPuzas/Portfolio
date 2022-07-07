import { useState, forwardRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import "./Dialog.css";
import { isNullishCoalesce } from "typescript";
import { CourseDetailsProps, GithubProps } from "../../Interfaces/Skills";

interface DialogWindowProps {
  text: string;
  title: string;
  imgLink?: string;
  courseDetails?: CourseDetailsProps;
  github?: GithubProps[];
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogWindow = ({
  text,
  title,
  imgLink = "/favicon.ico",
  courseDetails,
  github
}: DialogWindowProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Avatar
        src={imgLink}
        sx={{ width: 75, height: 75 }}
        onClick={handleClickOpen}
      />
      <Dialog
        className="app-dialog"
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className="app-bar" sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {imgLink != "/favicon.ico" ? (
              <img
                className="dialog-icon"
                src={imgLink}
                alt={`${title} logo`}
              />
            ) : null}
            <h2>{title}</h2>
          </Toolbar>
        </AppBar>
        <div className="dialog-container">
          <p className="card-paragraph dialog-paragraph">{text}</p>
          <Divider />
          <List>
            {courseDetails && <p className="card-paragraph dialog-paragraph">Course List:</p>}
            {courseDetails && (
              <>
                <ListItem button>
                  <ListItemText
                    primary={courseDetails.courseName}
                    // secondary={courseDetails.courseLink}
                    onClick={() => window.open(courseDetails.courseLink)}
                  />
                </ListItem>
                <Divider />
              </>
            )}
            {github && <p className="card-paragraph dialog-paragraph">Github Projects:</p>}
            {github && github.map((item, index) => (
                <>
                <ListItem button>
                  <ListItemText
                    primary={item.githubName}
                    // secondary={item.githubLink}
                    onClick={() => window.open(item.githubLink)}
                  />
                </ListItem>
                <Divider />
                </>
            ))}
          </List>
        </div>
      </Dialog>
    </>
  );
};

export default DialogWindow;
