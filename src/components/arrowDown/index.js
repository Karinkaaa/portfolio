import { IconButton, makeStyles } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import React from "react";
import { YELLOW } from "../../utils/colors";
import { PROJECTS_HREF } from "../../utils/hrefs";
import { PROJECTS } from "../../utils/ids";

const useStyles = makeStyles({
  arrow: {
    position: "absolute",
    bottom: "5%",
    left: "calc(50% - 25px)",
    color: "YELLOW",
    border: `1px solid ${YELLOW}`,
    animation: "1s linear 2s infinite alternate $arrow",
    "&:hover": {
      background: YELLOW,
      color: "black",
    },
  },
  "@keyframes arrow": {
    from: {
      transform: "translate(0px, 0px)",
    },
    to: {
      transform: "translate(0px, -10px)",
    },
  },
});

export const ArrowDownButton = () => {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.arrow}
      href={PROJECTS_HREF}
      onClick={() => {
        document
          .getElementById(PROJECTS)
          .scrollIntoView({ behavior: "smooth" });
      }}
    >
      <KeyboardArrowDown />
    </IconButton>
  );
};
