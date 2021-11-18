import React from "react";
import { AppBar, CssBaseline, makeStyles, Toolbar } from "@material-ui/core";
import AppBarReference from "./AppBarReference";
import { NAME } from "../../utils/info";
import { PROJECTS_ID, SKILLS_ID } from "../../utils/ids";
import { MAIN_HREF, PROJECTS_HREF, SKILLS_HREF } from "../../utils/hrefs";

const useStyles = makeStyles(({
    root: {
        position: "absolute"
    },
    toolbar: {
        position: "absolute",
        backdropFilter: "blur(30px)",
        width: "100%",
        boxShadow: "0 0 3px whitesmoke"
    },
    divName: {
        flexGrow: 1
    },
    div: {
        marginLeft: "5vw"
    }
}));

const AppBarComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.divName}>
                        <AppBarReference href={MAIN_HREF} name={NAME}/>
                    </div>

                    <div className={classes.div}>
                        <AppBarReference href={SKILLS_HREF} name={SKILLS_ID}/>
                    </div>

                    <div className={classes.div}>
                        <AppBarReference href={PROJECTS_HREF} name={PROJECTS_ID}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarComponent;
