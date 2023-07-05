import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { YELLOW } from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 20,
    color: "white",
    "&:hover": {
      color: YELLOW,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
}));

const AppBarReference = ({ href, name }) => {
  const classes = useStyles();

  return (
    <a className={classes.root} href={href}>
      {name}
    </a>
  );
};

AppBarReference.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AppBarReference;
