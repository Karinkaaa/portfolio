import React from "react";
import "./index.css";

const ColorfulText = ({ text }) => {
    const ref = "#" + text;

    return (
        <div>
            <svg className={"my-svg"}>
                <symbol id={text}>
                    <text textAnchor={"middle"} x={"30%"} y={"25%"}>
                        {text}
                    </text>
                </symbol>

                <use xlinkHref={ref} className={"text"}/>
                <use xlinkHref={ref} className={"text"}/>
                <use xlinkHref={ref} className={"text"}/>
                <use xlinkHref={ref} className={"text"}/>
                <use xlinkHref={ref} className={"text"}/>
            </svg>
        </div>
    );
};

export default ColorfulText;