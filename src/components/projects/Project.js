import { CardActionArea, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { BLUE } from "../../utils/colors";
import Technologies from "./Technologies";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    margin: 20,
    padding: 15,
    textAlign: "center",
    alignSelf: "baseline",
    background: "#c6e7fb",
    color: "black",
    boxShadow: "0 0 5px whitesmoke",
    borderRadius: "2%",
    "&:hover": {
      cursor: "pointer",
      background: "white",
      boxShadow: "0 5px 0 #c40041",
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
    color: BLUE,
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
    <CardActionArea className={classes.root} href={link}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.subtitle} gutterBottom>
        {subtitle}
      </Typography>
      <Technologies technologies={technologies} />
    </CardActionArea>
  );
};

Project.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Project;
