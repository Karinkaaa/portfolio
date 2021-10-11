import React from "react";
import { AppBar, CssBaseline, makeStyles, Toolbar } from "@material-ui/core";
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
    div: {
        flexGrow: 1
    },
    a: {
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

const AppBarComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.div}>
                        <a
                            className={classes.a}
                            href={MAIN_HREF}
                        >
                            {NAME}
                        </a>
                    </div>

                    <a
                        className={classes.a}
                        href={SKILLS_HREF}
                    >
                        {SKILLS_ID}
                    </a>

                    <a
                        className={classes.a}
                        style={{ marginLeft: 55 }}
                        href={PROJECTS_HREF}
                    >
                        {PROJECTS_ID}
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarComponent;
