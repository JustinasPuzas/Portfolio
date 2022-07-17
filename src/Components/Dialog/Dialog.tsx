import { useState, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import "./Dialog.css";

interface DialogWindowProps {
  text: string;
  title: string;
  children?: React.ReactNode;
  vilniusTech?: boolean;
  imgLink?: string;
  udemy?: boolean;
  github?: boolean;
  linkedIn?: boolean;
  gallery?: boolean;
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
  linkedIn,
  gallery
}: DialogWindowProps) => {
  const [open, setOpen] = useState(false);
  const clickable = children || text;

  const handleClickOpen = () => {
    if (clickable) setOpen(true);
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
          <img className="dialog-icon-badge" src="/githubLogo.png" alt="Github Logo"></img>
        )}
        {linkedIn && (
          <img className="dialog-icon-badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="Linkedin Logo"></img>
        )}
        {udemy && (
          <img
            className="dialog-icon-badge"
            src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og"
            alt="Udemy Logo"
          ></img>
        )}
        {vilniusTech && (
          <img
            className="dialog-icon-badge"
            src="https://yt3.ggpht.com/ytc/AKedOLRmYAgv1n_cAoGhIpuBJz5tUs8VI0POfntCDO_mrA=s900-c-k-c0x00ffffff-no-rj"
            alt="Vilnius Tech Logo"
          />
        )}
        {gallery && (
          <img
            className="dialog-icon-badge"
            src="https://www.phoca.cz/images/projects/phoca-gallery-r.png"
            alt="Gallery Logo"
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
            {imgLink !== "/favicon.ico" ? (
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
          {children && (
            <>
              <List className="dialog-list">{children}</List>{" "}
            </>
          )}
        </div>
        <svg className="dialog-wave" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#32323c"
              fillOpacity="1"
              d="M0,192L0,32L36.9,32L36.9,160L73.8,160L73.8,192L110.8,192L110.8,224L147.7,224L147.7,160L184.6,160L184.6,192L221.5,192L221.5,0L258.5,0L258.5,128L295.4,128L295.4,288L332.3,288L332.3,192L369.2,192L369.2,128L406.2,128L406.2,160L443.1,160L443.1,96L480,96L480,96L516.9,96L516.9,32L553.8,32L553.8,0L590.8,0L590.8,32L627.7,32L627.7,64L664.6,64L664.6,64L701.5,64L701.5,32L738.5,32L738.5,0L775.4,0L775.4,256L812.3,256L812.3,192L849.2,192L849.2,32L886.2,32L886.2,320L923.1,320L923.1,96L960,96L960,192L996.9,192L996.9,192L1033.8,192L1033.8,224L1070.8,224L1070.8,32L1107.7,32L1107.7,288L1144.6,288L1144.6,32L1181.5,32L1181.5,192L1218.5,192L1218.5,32L1255.4,32L1255.4,128L1292.3,128L1292.3,96L1329.2,96L1329.2,96L1366.2,96L1366.2,0L1403.1,0L1403.1,32L1440,32L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
            ></path>
          </svg>
      </Dialog>
    </>
  );
};

export default DialogWindow;
