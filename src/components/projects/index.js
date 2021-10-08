import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ColorfulText from "../colorfulText";
import Project from "./Project";
import ProjectItems from "../../utils/projects";

const useStyles = makeStyles(({
    root: {
        minHeight: "100vh",
        minWidth: "100vh",
        background: "linear-gradient(to right, #010C28FF, #022323FF);",
        padding: "0 150px"
    },
    div: {
        display: "flex"
    }
}));

const Projects = ({ projects }) => {
    const classes = useStyles();

    return (
        <div id={"projects"} className={classes.root}>
                <ColorfulText text={"Projects"}/>

                <div className={classes.div}>
                    {
                        projects.map(({ link, title, subtitle, technologies }) => (
                            <Project
                                id={link}
                                link={link}
                                title={title}
                                subtitle={subtitle}
                                technologies={technologies}
                            />
                        ))
                    }
                </div>
        </div>
    );
};

Projects.defaultProps = {
    projects: ProjectItems
};

export default Projects;