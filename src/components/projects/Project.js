import { CardContent, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Technologies from "./Technologies";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    margin: 20,
    padding: 15,
    textAlign: "center",
    alignSelf: "baseline",
    background: "#8bc0a726",
    color: "rgba(255,255,255,0.91)",
    boxShadow: "0 0 5px whitesmoke",
    borderRadius: "2%",
    "&:hover": {
      boxShadow: "0 0 10px cyan",
    },
    "&:last-child": {
      paddingBottom: 15,
    },
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
  },
  title: {
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 32,
    color: "rgb(255,226,0)",
    "&:hover": {
      color: "#f44336",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },
  subtitle: {
    fontSize: 20,
    padding: "10px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
}));

const Project = ({ link, title, subtitle, technologies }) => {
  const classes = useStyles();

  return (
    <CardContent className={classes.root}>
      <a className={classes.title} href={link}>
        {title}
      </a>
      <Typography className={classes.subtitle} gutterBottom>
        {subtitle}
      </Typography>
      <Technologies technologies={technologies} />
    </CardContent>
  );
};

Project.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Project;
