import React, { useEffect } from "react";
import App3D from "../app3D";
import AppBarComponent from "../components/appBar";
import Title from "../components/title";
import Skills from "../components/skills";
import Projects from "../components/projects";
import { MAIN_ID } from "../utils/ids";

const App = () => {
    useEffect(() => {
        App3D();
    }, []);

    return (
        <div>
            <div id={MAIN_ID}>
                <AppBarComponent/>
                <Title/>
            </div>

            <Skills/>
            <Projects/>
        </div>
    );
};

export default App;
