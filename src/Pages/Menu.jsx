import React from "react";
import SafeArea from "../components/SafeArea";

var items = [
    { item: "Felafel sandwich", cost: "$4.50", meal: "L" },
    { item: "Cheese pizza", cost: "$4.50", meal: "L" },
    { item: "Breakfast Burrito", cost: "$3.50", meal: "B" },
    { item: "Hamburger", cost: "$4.00", meal: "L" },
    { item: "Mac and Cheese", cost: "$4.50", meal: "D" },
    { item: "Muffin", cost: "$2.50", meal: "B" },
    { item: "Salisbury Steak", cost: "$6.50", meal: "D" },
    { item: "Pancakes", cost: "$3.50", meal: "B" },
    { item: "Spaghetti", cost: "$4.50", meal: "D" },
];

function Menu(props) {
    const menuMap = items.map((item, index) => (
        <div key={`${item}${index}`}>
            <p>{item.item}</p>
            <p>{item.cost}</p>
        </div>
    ));
    return (
        <SafeArea>
            <h1>This is our menu</h1>
            {menuMap}
        </SafeArea>
    );
}

export default Menu;
