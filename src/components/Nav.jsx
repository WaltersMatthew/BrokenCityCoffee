import React from "react";

function Nav(props) {
    return (
        <div className="header flex justify-between">
            <div className="width-50">
                <h1 className="text-xl md:text-[40px]">Broken City Coffee</h1>
            </div>
            <img className="" src="/favicon.ico" alt="logo" />
        </div>
    );
}

export default Nav;
