import React from "react";
import { Link } from "react-router-dom";
function AppButton(props) {
    return (
        <Link to={`${props.to}`}>
            <button className="m-4 px-4 py-2 bg-stone-700/75 hover:bg-stone-700">
                {props.children}
            </button>
        </Link>
    );
}

export default AppButton;
