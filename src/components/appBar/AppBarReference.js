import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({
    root: {
        fontVariantCaps: "small-caps",
        textTransform: "capitalize",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 26,
        color: "#fff",

        "&:hover": {
            color: "rgb(255,226,0)"
        }
    }
}));

const AppBarReference = ({ href, name }) => {
    const classes = useStyles();

    return (
        <a
            className={classes.root}
            href={href}
        >
            {name}
        </a>
    );
};

AppBarReference.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default AppBarReference;