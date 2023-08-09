import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Nav from "./components/Nav";
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
            <Footer />
        </CartProvider>
    );
}

export default App;
