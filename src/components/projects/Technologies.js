import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    typo: {
        display: "inline-block",
        background: "#327dabd1",
        color: "#fff",
        fontFamily: "monospace",
        fontVariantCaps: "normal",
        textTransform: "lowercase",
        fontSize: 15,
        margin: 5,
        padding: 8,
        borderRadius: "10%",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)"
    }
});

const Technologies = ({ technologies }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {
                technologies.map((technology) => (
                    <Typography key={technology} className={classes.typo}>
                        {technology}
                    </Typography>
                ))
            }
        </React.Fragment>
    );
};

Technologies.propTypes = {
    technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Technologies;