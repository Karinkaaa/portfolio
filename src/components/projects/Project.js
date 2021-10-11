import React from "react";
import { CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(({
    card: {
        width: 370,
        margin: 20,
        padding: 15,
        textAlign: "center",
        alignSelf: "baseline",
        background: "#8bc0a726",
        color: "rgba(255,255,255,0.91)",
        fontVariantCaps: "small-caps",
        textTransform: "capitalize",
        boxShadow: "0 0 5px whitesmoke",
        borderRadius: "2%",

        "&:hover": {
            boxShadow: "0 0 10px cyan"
        },
        "&:last-child": {
            paddingBottom: 15
        }
    },
    title: {
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 32,
        color: "rgb(255,226,0)",

        "&:hover": {
            color: "#f44336",
            cursor: "pointer"
        }
    },
    subtitle: {
        fontSize: 20,
        padding: "10px 0"
    },
    span: {
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
}));

const Project = ({ link, title, subtitle, technologies }) => {
    const classes = useStyles();

    return (
        <CardContent className={classes.card}>
            <a
                className={classes.title}
                href={link}
            >
                {title}
            </a>

            <Typography className={classes.subtitle} gutterBottom>
                {subtitle}
            </Typography>

            {
                technologies.map((technology) => (
                    <Typography id={link} className={classes.span}>
                        {technology}
                    </Typography>
                ))
            }
        </CardContent>
    );
};

export default Project;