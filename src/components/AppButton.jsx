import React from "react";
import { Link } from "react-router-dom";
function AppButton(props) {
    return (
        <Link to={`${props.to}`}>
            <button className="w-24 h-10 bg-stone-700 hover:bg-stone-600">
                {props.children}
            </button>
        </Link>
    );
}

export default AppButton;
