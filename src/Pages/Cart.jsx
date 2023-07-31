import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";
import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import Modal from "../components/Modal";
import SafeArea from "../components/SafeArea";

function Cart(props) {
    // Use a unique key to force a re-render when local storage is cleared
    const [cartKey, setCartKey] = useState(Date.now());

    // Get cartItems and setCartItems from the CartContext
    const { cartItems, setCartItems } = useContext(CartContext);

    // Function to handle clearing local storage
    const handleClearLocalStorage = () => {
        localStorage.clear();
        // Update the cartKey to trigger a re-render
        setCartKey(Date.now());
    };

    // Calculate cart total
    let total = 0;
    const cartMap = cartItems.map((item, idx) => {
        total += parseInt(item.cost);
        return (
            <ul className="m-6" key={`${idx}${item.name}`}>
                <li className="list-disc">
                    {item.name}, {item.cost}
                </li>
            </ul>
        );
    });

    // JSX for when the cart is empty
    const noCart = (
        <SafeArea>
            <p className="text-center">
                You have no items in your cart. Head back to the{" "}
                <AppButton to="/menu">Menu</AppButton> to start your order
            </p>
        </SafeArea>
    );

    // JSX for the cart with items
    const fullCart = (
        <SafeArea>
            <AppCard>
                <p>Your Order:</p>
                {cartMap}
                <p className="float-right">Total ${total}</p>
            </AppCard>
            <div className="flex justify-between">
                <AppButton to="/menu">Back to menu</AppButton>
                <Modal handleClearLocalStorage={handleClearLocalStorage}>
                    <div className="flex flex-col items-center">
                        <p>
                            Thank you, your order has been placed! See you soon!
                        </p>
                        <AppButton to="/">Back Home</AppButton>
                    </div>
                </Modal>
            </div>
        </SafeArea>
    );

    // Conditionally render the cart content
    return cartItems.length === 0 ? noCart : fullCart;
}

export default Cart;
