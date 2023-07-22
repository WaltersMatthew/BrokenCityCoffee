import React from "react";
function Nav(props) {
    return (
        // see App.css for box shadow and height styles
        <div className="header bg-stone-800 flex justify-between items-center z-10">
            <div className="mt-2 ml-2 text-3xl md:text-[40px]">
                <a href="/">
                    Broken
                    <br /> City
                    <br /> Coffee
                </a>
            </div>
            <img className="h-24" src="/favicon.ico" alt="logo" />
        </div>
    );
}

export default Nav;
