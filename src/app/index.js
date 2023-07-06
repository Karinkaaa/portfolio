import React, { useEffect } from "react";
import App3D from "../app3D";
import AppBarComponent from "../components/appBar";
import { ArrowDownButton } from "../components/arrowDown";
import Projects from "../components/projects";
import Title from "../components/title";
import { INFO_HREF, PROJECTS_HREF } from "../utils/hrefs";
import { INFO } from "../utils/ids";

const App = () => {
  useEffect(() => {
    App3D();
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const position = window.scrollY;
    const height = window.screen.height / 2;

    if (position > height) {
      window.history.pushState({}, "", PROJECTS_HREF);
    } else {
      window.history.pushState({}, "", INFO_HREF);
    }
  }

  return (
    <div>
      <div id={INFO}>
        <AppBarComponent />
        <Title />
      </div>
      <ArrowDownButton />
      <Projects />
    </div>
  );
};

export default App;
