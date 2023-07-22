import React from "react";
import SafeArea from "../components/SafeArea";
import AppCard from "../components/AppCard";
import AppButton from "../components/AppButton";
var menu = [
    { item: "Artisan Pour-over", cost: "$4.5" },
    { item: "Au Lait", cost: "$5" },
    { item: "Espresso", cost: "$4" },
    { item: "Cortado", cost: "$4.5" },
    { item: "Latte", cost: "$5/$5.5/$6" },
    { item: "Flavored Latte", cost: "$5.5/$6/$6.5" },
    { item: "Cappuccino", cost: "$4.5" },
    { item: "Cold Brew", cost: "$4" },
    { item: "Espresso Tonic", cost: "$6.5" },
    { item: "Thai Tea Slush", cost: "$6.5/$7.5" },
    { item: "Berry Dream", cost: "$6.5/$7.5" },
    { item: "Organic Oolong", cost: "$5" },
];

function Menu(props) {
    const menuMap = menu.map((item, index) => (
        <AppCard
            className="flex flex-col items-center px-0"
            key={`${item}${index}`}
        >
            <p>{item.item}</p>
            <img
                className="w-4/5 text-center"
                src="/favicon.ico"
                alt="coffee"
            />
            <p>{item.cost}</p>
            <AppButton>Add to Order</AppButton>
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
