import React from "react";

function SafeArea(props) {
    return <div className="safe-area px-10">{props.children}</div>;
}

export default SafeArea;
