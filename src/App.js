import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Menu from "./Pages/Menu";
import Nav from "./components/Nav";
import About from "./Pages/About";
import Visit from "./Pages/Visit";

function App() {
    return (
        <CartProvider>
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/visit" element={<Visit />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
