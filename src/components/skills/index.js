import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ColorfulText from "../colorfulText";
import Skill from "./Skill";
import SkillItems from "../../utils/skills";

const useStyles = makeStyles(({
    root: {
        minHeight: "100vh",
        minWidth: "100vh",
        background: "linear-gradient(to right, #022323FF, #010C28FF);"
    },
    div: {
        paddingTop: 50,
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center"
    }
}));

const Skills = ({ skills }) => {
    const classes = useStyles();

    return (
        <div id={"skills"} className={classes.root}>
            <Container>
                <ColorfulText text={"Skills"}/>

                <div className={classes.div}>
                    {
                        skills.map(({ link, title, alt }) => (
                            <Skill
                                id={alt}
                                link={link}
                                title={title}
                                alt={alt}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

Skills.defaultProps = {
    skills: SkillItems
};

export default Skills;