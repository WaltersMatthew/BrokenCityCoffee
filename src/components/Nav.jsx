import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
function Nav(props) {
    const { cartItems } = useContext(CartContext);

    const cartCount = cartItems.length;
    return (
        // see App.css for box shadow and height styles
        <div className="header bg-stone-800 flex justify-between items-center z-10">
            <div className="mt-2 ml-2 text-3xl md:text-[40px]">
                <a className="flex" href="/">
                    <img
                        alt="bclogo"
                        src="/bclogo.png"
                        width={60}
                        height={100}
                    />
                    Broken
                    <br /> City
                    <br /> Coffee
                </a>
            </div>
            <div className="flex items-center">
                <a href="/cart">
                    <p className="mr-6 border rounded-full px-2 bg-stone-600">
                        {cartCount}
                    </p>
                </a>
                <img className="h-24" src="/favicon.ico" alt="logo" />
            </div>
        </div>
    );
}

export default Nav;
