import React from "react";

function ActionButton(props) {
    return (
        <button className="m-4 px-4 py-2 bg-stone-700/75 hover:bg-stone-700">
            {props.children}
        </button>
    );
}

export default ActionButton;
