import React from "react";

function Footer(props) {
    return (
        <div className="fixed bottom-0 flex justify-center items-center bg-stone-600/25 w-full h-10">
            <p className="">
                Designed and created by{" "}
                <a
                    className="underline"
                    href="https://waltersmatthew.vercel.app/"
                >
                    Matthew Walters
                </a>{" "}
                2023
            </p>{" "}
            <a href="https://github.com/WaltersMatthew/BrokenCityCoffee">
                <img alt="github logo" className="w-5 mx-4" src="/github.png" />
            </a>
        </div>
    );
}

export default Footer;
