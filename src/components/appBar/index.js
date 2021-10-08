import React from "react";
import { AppBar, CssBaseline, makeStyles, Toolbar } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

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
                            href={"#main"}
                        >
                            Kharina Karyna
                        </a>
                    </div>

                    <a
                        className={classes.a}
                        href={"#skills"}
                    >
                        Skills
                    </a>

                    <a
                        className={classes.a}
                        style={{ marginLeft: 55 }}
                        href={"#projects"}
                    >
                        Projects
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBarComponent;
