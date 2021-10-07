import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Contact from "../contact";

const useStyles = makeStyles(({
    root: {
        position: "absolute",
        zIndex: 10,
        maxWidth: "fit-content",
        margin: "12% 0 0 65%",
        padding: 25,
        textAlign: "end",
        color: "white",
        backdropFilter: "blur(20px)",
        borderRadius: 50
    },
    name: {
        fontVariantCaps: "small-caps",
        fontWeight: 700,
        fontSize: 55
    },
    position: {
        fontVariantCaps: "small-caps",
        fontWeight: 600,
        fontSize: 40,
        paddingBottom: 20,
        color: "#FFE200FF"
    }
}));

const Title = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box className={classes.name}>
                Kharina Karyna
            </Box>

            <Box className={classes.position}>
                JavaScript Developer
            </Box>

            <Contact/>
        </Container>
    );
};

export default Title;