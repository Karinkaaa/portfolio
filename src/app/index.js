import React, { useEffect } from "react";
import App3D from "../app3D";
import AppBarComponent from "../components/appBar";
import { ArrowDownButton } from "../components/arrowDown";
import Projects from "../components/projects";
import Title from "../components/title";
import { MAIN_ID } from "../utils/ids";

const App = () => {
  useEffect(() => {
    App3D();
  }, []);

  return (
    <div>
      <div id={MAIN_ID}>
        <AppBarComponent />
        <Title />
      </div>
      <ArrowDownButton />
      <Projects />
    </div>
  );
};

export default App;
