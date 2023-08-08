// CartContext.js
import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
    const [cartItems, setCartItems] = useState(initialCartItems);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        // Watch for changes in local storage made in other tabs/windows
        const handleStorageChange = (event) => {
            if (event.key === "cartItems") {
                const newCartItems = JSON.parse(event.newValue);
                setCartItems(newCartItems || []);
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    // Periodically check for changes in localStorage
    useEffect(() => {
        const checkLocalStorageChanges = () => {
            const newCartItems =
                JSON.parse(localStorage.getItem("cartItems")) || [];
            if (JSON.stringify(newCartItems) !== JSON.stringify(cartItems)) {
                setCartItems(newCartItems);
            }
        };

        const interval = setInterval(checkLocalStorageChanges, 1000); // Check every second

        return () => {
            clearInterval(interval);
        };
    }, [cartItems]);
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
