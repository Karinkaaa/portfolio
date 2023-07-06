import { Container, makeStyles, Toolbar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { PROJECTS } from "../../utils/ids";
import ProjectItems from "../../utils/projects";
import Project from "./Project";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    minWidth: "100%",
    background: "#141617",
    padding: "0 4% 4%",
  },
  div: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: 600,
    margin: "50px 0 25px",
  },
});

const Projects = ({ projects }) => {
  const classes = useStyles();

  return (
    <div id={PROJECTS} className={classes.root}>
      <Toolbar />
      <Container>
        <div className={classes.div}>
          <Typography className={classes.title}>PROJECTS</Typography>
        </div>
        <div className={classes.div}>
          {projects.map(({ link, title, subtitle, technologies }) => (
            <Project
              key={link}
              link={link}
              title={title}
              subtitle={subtitle}
              technologies={technologies}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

Projects.defaultProps = {
  projects: ProjectItems,
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired
  ).isRequired,
};

export default Projects;
