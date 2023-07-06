import { AppBar, CssBaseline, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { INFO_HREF } from "../../utils/hrefs";
import { NAME } from "../../utils/info";
import AppBarReference from "./AppBarReference";

const useStyles = makeStyles({
  root: {
    position: "absolute",
  },
  toolbar: {
    position: "absolute",
    backdropFilter: "blur(30px)",
    width: "100%",
    boxShadow: "0 0 3px whitesmoke",
  },
  divName: {
    flexGrow: 1,
  },
  div: {
    marginLeft: "5vw",
  },
});

const AppBarComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <div className={classes.divName}>
            <AppBarReference href={INFO_HREF} name={NAME} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
