import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        textTransform: "capitalize",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 24,
        color: "#fff",
        "&:hover": {
            color: "rgb(255,226,0)"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 16
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