import React from "react";

function AppCard(props) {
    return (
        <div
            className={`${props.className} border-8 border-stone-600 rounded-xl p-4 mb-2 bg-stone-800/75 overflow-hidden`}
        >
            {props.children}
        </div>
    );
}

export default AppCard;
