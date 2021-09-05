import React, { useEffect } from "react";
import Background from "../background";

function App() {
    useEffect(() => {
        Background();
    }, []);

    return (
        <div>
            Hello, world!
            <div id="busiha">my canvas</div>
        </div>
    );
}

export default App;
