import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  typo: {
    display: "inline-block",
    background: "#327dabd1",
    color: "white",
    fontFamily: "monospace",
    fontVariantCaps: "normal",
    textTransform: "lowercase",
    fontSize: 15,
    margin: 5,
    padding: 8,
    borderRadius: "10%",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      margin: 3,
      padding: 5,
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
