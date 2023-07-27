import React, { useContext, useEffect } from "react";
import AppCard from "../components/AppCard";
import SafeArea from "../components/SafeArea";
import { CartContext } from "../components/CartContext";

const menu = [
    { name: "Artisan Pour-over", cost: "4.5" },
    { name: "Au Lait", cost: "5" },
    { name: "Espresso", cost: "4" },
    { name: "Cortado", cost: "4.5" },
    { name: "Latte", cost: "5/5.5/6" },
    { name: "Flavored Latte", cost: "5.5/6/6.5" },
    { name: "Cappuccino", cost: "4.5" },
    { name: "Cold Brew", cost: "4" },
    { name: "Espresso Tonic", cost: "6.5" },
    { name: "Thai Tea Slush", cost: "6.5/7.5" },
    { name: "Berry Dream", cost: "6.5/7.5" },
    { name: "Organic Oolong", cost: "5" },
];

function Menu(props) {
    const { cartItems, setCartItems } = useContext(CartContext);

    const addToCart = (e, index) => {
        e.preventDefault();
        const clickedItem = menu[index];
        const updatedCartItems = [
            ...cartItems,
            { name: clickedItem.name, cost: clickedItem.cost },
        ];
        setCartItems(updatedCartItems);
        console.log(cartItems);
    };

    useEffect(() => {
        // Log the updated cartItems after the state has been updated
        console.log("Updated cartItems:", cartItems);
    }, [cartItems]);

    const menuMap = menu.map((item, index) => (
        <AppCard className="flex flex-col items-center px-0" key={`${index}`}>
            <p>{item.name}</p>
            <img
                className="w-4/5 text-center"
                src="/favicon.ico"
                alt="coffee"
            />
            <p>{item.cost}</p>
            <button
                className="m-4 px-4 py-2 bg-stone-700/75 hover:bg-stone-700"
                onClick={(e) => addToCart(e, index)}
            >
                Add to Order
            </button>
        </AppCard>
    ));

    return (
        <SafeArea>
            <h1 className="text-6xl mb-4">Menu</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center items-center">
                {menuMap}
            </div>
        </SafeArea>
    );
}

export default Menu;
