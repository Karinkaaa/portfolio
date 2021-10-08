import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ColorfulText from "../colorfulText";

const useStyles = makeStyles(({
    root: {
        minHeight: "100vh",
        minWidth: "100vh",
        background: "linear-gradient(to right, #022323FF, #010C28FF);"
    },
    div: {
        paddingTop: 50,
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center"
    },
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

const Skills = () => {
    const classes = useStyles();

    return (
        <div id={"skills"} className={classes.root}>
            <Container>
                <ColorfulText text={"Skills"}/>

                <div className={classes.div}>
                    <div className={classes.item}>
                        <img className={classes.img} src={"/javascript.svg"} alt={"git"}/>
                        <span className={classes.span}>JavaScript</span>
                    </div>

                    <div className={classes.item}>
                        <img className={classes.img} src={"/react.png"} alt={"react"}/>
                        <span className={classes.span}>React</span>
                    </div>

                    <div className={classes.item}>
                        <img className={classes.img} src={"/redux.svg"} alt={"redux"}/>
                        <span className={classes.span}>Redux</span>
                    </div>

                    <div className={classes.item}>
                        <img className={classes.img} src={"/redux-saga.svg"} alt={"redux-saga"}/>
                        <span className={classes.span}>Redux Saga</span>
                    </div>

                    <div className={classes.item}>
                        <img className={classes.img} src={"/material-ui.svg"} alt={"material-ui"}/>
                        <span className={classes.span}>Material UI</span>
                    </div>

                    <div className={classes.item}>
                        <img className={classes.img} src={"/html.svg"} alt={"html"}/>
                        <span className={classes.span}>HTML</span>
                    </div>

                    <div className={classes.item}>
                        <img className={classes.img} src={"/css.svg"} alt={"css"}/>
                        <span className={classes.span}>CSS</span>
                    </div>

                    <div className={classes.item}>
                        <img className={classes.img} src={"/git.svg"} alt={"git"}/>
                        <span className={classes.span}>Git</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;