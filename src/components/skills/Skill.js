import React from "react";
import PropTypes from "prop-types";
import { CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        textAlign: "center",
        justifyItems: "center",
        width: 250,
        margin: "2%",
        transition: "1s",
        "&:hover": {
            transform: "scale(1.2)"
        },
        [theme.breakpoints.down("sm")]: {
            width: 150,
            margin: 2
        }
    },
    img: {
        width: "fit-content",
        height: 135,
        [theme.breakpoints.down("sm")]: {
            height: 75
        }
    },
    cardContent: {
        [theme.breakpoints.down("sm")]: {
            padding: 0
        }
    },
    title: {
        fontWeight: 600,
        fontSize: 20,
        color: "#fff",
        margin: 10,
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
            fontWeight: 500
        }
    }
}));

const Skill = ({ link, title, alt }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CardMedia
                className={classes.img}
                component={"img"}
                image={link}
                alt={alt}
            />

            <CardContent className={classes.cardContent}>
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