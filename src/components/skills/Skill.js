import React from "react";
import PropTypes from "prop-types";
import { CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(({
    card: {
        display: "grid",
        textAlign: "center",
        justifyContent: "center",
        width: 250,
        margin: 25,
        transition: "1s",

        "&:hover": {
            transform: "scale(1.2)"
        }
    },
    img: {
        width: "fit-content",
        height: 140
    },
    title: {
        fontVariantCaps: "small-caps",
        textTransform: "capitalize",
        fontWeight: 600,
        fontSize: 20,
        color: "#fff",
        margin: 10
    }
}));

const Skill = ({ link, title, alt }) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <CardMedia
                className={classes.img}
                component={"img"}
                image={link}
                alt={alt}
            />

            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    {title}
                </Typography>
            </CardContent>
        </div>

    );
};

Skill.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default Skill;