import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  typo: {
    display: "inline-block",
    background: "white",
    color: "darkblue",
    fontFamily: "monospace",
    fontVariantCaps: "normal",
    textTransform: "lowercase",
    fontSize: 15,
    margin: 5,
    padding: "8px 10px",
    borderRadius: 5,
    boxShadow: "inset 0 0 5px royalblue",
    [theme.breakpoints.down("md")]: {
      margin: 5,
      padding: 7,
    },
  },
}));

const Technologies = ({ technologies }) => {
  const classes = useStyles();

  return (
    <>
      {technologies.map((technology) => (
        <Typography key={technology} className={classes.typo}>
          {technology}
        </Typography>
      ))}
    </>
  );
};

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Technologies;
