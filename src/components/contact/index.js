import React from "react";
import { Container, IconButton, makeStyles } from "@material-ui/core";
import { GitHub, LinkedIn, Telegram } from "@material-ui/icons";
import { GITHUB, LINKED_IN, TELEGRAM } from "../../utils/links";

const useStyles = makeStyles(({
    root: {
        margin: 10
    },
    icon: {
        fontSize: "xx-large",
        color: "white",
        marginLeft: 20
    }
}));

const Connect = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <IconButton onClick={() => window.open(TELEGRAM)}>
                <Telegram className={classes.icon}/>
            </IconButton>

            <IconButton onClick={() => window.open(LINKED_IN)}>
                <LinkedIn className={classes.icon}/>
            </IconButton>

            <IconButton onClick={() => window.open(GITHUB)}>
                <GitHub className={classes.icon}/>
            </IconButton>
        </Container>
    );
};

export default Connect;