import React from "react";
import PropTypes from "prop-types";
import { Container, makeStyles } from "@material-ui/core";
import ColorfulText from "../colorfulText";
import Skill from "./Skill";
import SkillItems from "../../utils/skills";
import { SKILLS_ID } from "../../utils/ids";
import { COLORFUL_TEXT_SKILLS } from "../../utils/colorfulText";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to right, #022323FF, #010C28FF)"
    },
    div: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
});

const Skills = ({ skills }) => {
    const classes = useStyles();

    return (
        <div id={SKILLS_ID} className={classes.root}>
            <Container>
                <ColorfulText text={COLORFUL_TEXT_SKILLS}/>

                <div className={classes.div}>
                    {
                        skills.map(({ link, title, alt }) => (
                            <Skill
                                key={alt}
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

Skills.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default Skills;