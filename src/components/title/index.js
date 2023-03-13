import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Contact from "../contact";
import { NAME, POSITION } from "../../utils/info";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        minWidth: 200,
        maxWidth: "fit-content",
        padding: 25,
        top: "25%",
        right: "10%",
        textAlign: "end",
        color: "#0057b7",
        borderRadius: 50,
        backdropFilter: "blur(20px)"
    },
    name: {
        fontWeight: 700,
        fontSize: 55,
        [theme.breakpoints.down("sm")]: {
            fontSize: 28
        }
    },
    position: {
        fontWeight: 600,
        fontSize: 40,
        paddingBottom: 20,
        color: "#ffd700",
        [theme.breakpoints.down("sm")]: {
            fontSize: 20
        }
    }
}));

const Title = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box className={classes.name}>
                {NAME}
            </Box>

            <Box className={classes.position}>
                {POSITION}
            </Box>

            <Contact/>
        </Container>
    );
};

export default Title;
