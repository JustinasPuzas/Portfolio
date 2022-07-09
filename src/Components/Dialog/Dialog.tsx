import { useState, forwardRef } from "react";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Badge from "@mui/material/Badge";
import { TransitionProps } from "@mui/material/transitions";

import "./Dialog.css";
import { isNullishCoalesce } from "typescript";
import { CourseDetailsProps, GithubProps } from "../../Interfaces/Skills";

interface DialogWindowProps {
  text: string;
  title: string;
  children?: React.ReactNode;
  vilniusTech?: boolean;
  imgLink?: string;
  udemy?: boolean;
  github?: boolean;
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
  children,
  imgLink = "/favicon.ico",
  udemy,
  github,
  vilniusTech,
}: DialogWindowProps) => {
  const [open, setOpen] = useState(false);
  const clickable = vilniusTech || udemy || github || children;
  
  const handleClickOpen = () => {
    if(clickable)
      setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={`dialog-icon-big ${clickable ? "clickable" : ""}`}
        style={{ backgroundImage: `url(${imgLink})` }}
        onClick={handleClickOpen}
      >
        {github && (
          <img
            className="dialog-icon-badge"
            src="/githubLogo.png"
          ></img>
        )}
        {udemy && (
          <img
            className="dialog-icon-badge"
            src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og"
          ></img>
        )}
        {vilniusTech && (
          <img
            className="dialog-icon-badge"
            src="https://yt3.ggpht.com/ytc/AKedOLRmYAgv1n_cAoGhIpuBJz5tUs8VI0POfntCDO_mrA=s900-c-k-c0x00ffffff-no-rj"
          />
        )}
      </div>
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
            {children}
          </List>
        </div>
      </Dialog>
    </>
  );
};

export default DialogWindow;
