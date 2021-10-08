import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({
    img: {
        height: 150,
        marginTop: 50,
        transition: "1s",

        "&:hover": {
            transform: "scale(1.2)"
        }
    },
    item: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 275
    },
    span: {
        fontVariantCaps: "small-caps",
        textTransform: "capitalize",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 20,
        color: "#fff",
        margin: 30,
        transition: "1s",

        "&:hover": {
            transform: "scale(1.2)"
        }
    }
}));

const Skill = ({ link, title, alt }) => {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <img className={classes.img} src={link} alt={alt}/>
            <span className={classes.span}>{title}</span>
        </div>
    );
};

export default Skill;