import React from "react";

function SafeArea(props) {
    return <div className="safe-area p-4 md:px-10">{props.children}</div>;
}

export default SafeArea;
