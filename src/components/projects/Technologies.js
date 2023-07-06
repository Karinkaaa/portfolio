import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  typo: {
    display: "inline-block",
    background: "transparent",
    color: "black",
    fontFamily: "monospace",
    fontVariantCaps: "normal",
    textTransform: "lowercase",
    fontSize: 15,
    margin: 5,
    padding: "8px 10px",
    borderRadius: "10%",
    boxShadow: "inset 0 0 5px #00428b",
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
