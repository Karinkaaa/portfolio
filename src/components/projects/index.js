import React from "react";
import PropTypes from "prop-types";
import { Container, makeStyles } from "@material-ui/core";
import Project from "./Project";
import ColorfulText from "../colorfulText";
import ProjectItems from "../../utils/projects";
import { PROJECTS_ID } from "../../utils/ids";
import { COLORFUL_TEXT_PROJECTS } from "../../utils/colorfulText";

const useStyles = makeStyles(({
    root: {
        minHeight: "100vh",
        minWidth: "100%",
        background: "linear-gradient(to right, #010C28FF, #022323FF);",
        padding: "0 4% 4%"
    },
    div: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
}));

const Projects = ({ projects }) => {
    const classes = useStyles();

    return (
        <div id={PROJECTS_ID} className={classes.root}>
            <Container>
                <ColorfulText text={COLORFUL_TEXT_PROJECTS}/>

                <div className={classes.div}>
                    {
                        projects.map(({ link, title, subtitle, technologies }) => (
                            <Project
                                key={link}
                                link={link}
                                title={title}
                                subtitle={subtitle}
                                technologies={technologies}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

Projects.defaultProps = {
    projects: ProjectItems
};

Projects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
            technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired
    ).isRequired
};

export default Projects;