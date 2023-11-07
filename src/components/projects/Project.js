import { Box, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { BLUE } from "../../utils/colors";
import Technologies from "./Technologies";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
    padding: 25,
    textAlign: "center",
    alignSelf: "baseline",
    background: "whitesmoke",
    boxShadow: "0 0 5px whitesmoke",
    borderRadius: 10,
    minHeight: 600,
    [theme.breakpoints.down("md")]: {
      minHeight: 550,
    },
  },
  title: {
    marginTop: 15,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 32,
    color: BLUE,
    [theme.breakpoints.down("md")]: {
      fontSize: 26,
    },
  },
  subtitle: {
    fontSize: 20,
    padding: "10px 0",
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  },
  img: {
    height: "100%",
    width: '100%',
    borderRadius: 5,
    boxShadow: "0 0 5px whitesmoke",
  },
}));

const Project = ({ link, title, subtitle, technologies, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img className={classes.img} src={image} alt={title} />
      <Typography className={classes.title} href={link} target="_blank">
        {title}
      </Typography>
      <Typography className={classes.subtitle} gutterBottom>
        {subtitle}
      </Typography>
      <Technologies technologies={technologies} />
    </Box>
  );
};

Project.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
