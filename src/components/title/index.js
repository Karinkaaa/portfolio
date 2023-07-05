import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { BLUE, YELLOW } from "../../utils/colors";
import { NAME, POSITION } from "../../utils/info";
import Contact from "../contact";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    minWidth: 200,
    maxWidth: "fit-content",
    padding: 25,
    top: "25%",
    right: "10%",
    textAlign: "end",
    color: BLUE,
    borderRadius: 50,
    backdropFilter: "blur(20px)",
  },
  name: {
    fontWeight: 700,
    fontSize: 55,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  position: {
    fontWeight: 600,
    fontSize: 40,
    paddingBottom: 20,
    color: YELLOW,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
}));

const Title = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.name}>{NAME}</Box>
      <Box className={classes.position}>{POSITION}</Box>
      <Contact />
    </Container>
  );
};

export default Title;
