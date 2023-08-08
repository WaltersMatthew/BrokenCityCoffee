# Broken City Coffee - Mockup of a Fictional Coffee Shop

Welcome to the Broken City Coffee project! This repository houses a mockup of a fictional coffee shop website built using React. Whether you're a coffee aficionado, a web development enthusiast, or just someone looking for a creative project, this repository has something exciting in store for you.

## Broken City Coffee

### Table of Contents

<ul>
<li>Introduction</li>
<li>Features</li>
<li>Installation</li>
<li>Usage</li>
<li>Contributing</li>
<li>License</li>
</ul>

## Introduction

Broken City Coffee is a React-based project that embodies the essence of a trendy coffee shop nestled within a bustling city. This repository serves as a canvas to display various React concepts, modern UI design principles, and interactive functionality. Dive into the world of Broken City Coffee and explore the art of blending frontend technologies with coffee culture.

## Features

-   **Home Page**: A captivating homepage that instantly welcomes visitors, featuring enticing images and a warm ambiance.

-   **Visit Us**: Discover the coffee shop's location through an integrated Mapbox iframe, ensuring you'll never lose your way to your favorite brew.

-   **About Us**: Immerse yourself in the coffee shop's narrative, delving into its unique concept, values, and the vibrant city it calls home.

-   **Menu**: Satisfy your curiosity by perusing through a diverse menu of coffee concoctions, each accompanied by a mouthwatering description.

-   **Cart**: As you explore the menu, the cart elegantly keeps track of your selections. When you're ready to order, simply proceed to checkout and watch your choices come to life. The **Cart** functionality utilizes the `useState` hook for managing the selected items and quantities. The state of the cart is updated dynamically as items are added or removed, providing a seamless and reactive shopping experience. Additionally, the cart's state persists across pages and visits using the `localStorage` feature. This means that even if you navigate away from the cart page or close the browser, your selected items will still be retained when you return, offering a convenient and consistent shopping journey.

-   **Order Management**: When you've enjoyed your order, a simple "Clear Cart" click refreshes the canvas for your next adventure. To achieve this level of state persistence and continuity, the `useContext` hook is employed in conjunction with `localStorage`. The global state of the cart, managed by `useContext`, ensures consistent communication between the cart and other parts of the application. The use of `localStorage` guarantees that your cart's state remains intact, enhancing the user experience across sessions.

-   **Styling with Tailwind CSS**: The entire user interface is beautifully styled using Tailwind CSS, a utility-first CSS framework. Tailwind CSS empowers developers to create responsive and visually appealing designs with minimal effort. The project embraces Tailwind's intuitive class-based approach, ensuring a cohesive and polished appearance throughout.

> Note: To learn more about the `useState`, `useContext`, and `localStorage`, refer to the official [React documentation](https://reactjs.org/docs/hooks-intro.html) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Installation

To embark on your journey to Broken City Coffee, follow these simple steps:

Clone the Repository:

Copy code

```bash
git clone https://github.com/waltersmatthew/broken-city-coffee.git
```

Navigate to the Project Directory:

```bash
cd broken-city-coffee
```

Install Dependencies:

```bash
npm install
```

Usage
Once the setup is complete, savor the experience by starting the development server:

```bash
npm start
```

Unveil the magic by accessing `http://localhost:3000` in your browser, where the Broken City Coffee world awaits. Engage with the meticulously designed pages, savor the virtual menu, and let the cart be your guide as you craft your coffee escapade.

## Contributing

Enrich the Broken City Coffee experience by contributing your creativity and expertise! For bug reports, feature ideas, or code contributions, kindly open an issue or submit a pull request. Abide by the contribution guidelines within the repository to ensure a harmonious collaboration.

## License

This project operates under the MIT License, granting you the freedom to explore, experiment, and share the Broken City Coffee magic.

Indulge in the captivating realm of Broken City Coffee! If queries arise or inspiration strikes, don't hesitate to connect with us. Here's to coding and coffee – may your endeavors be endlessly rewarding. ☕
