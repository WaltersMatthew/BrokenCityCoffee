import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Nav from "./components/Nav";
import About from "./Pages/About";
import Visit from "./Pages/Visit";

function App() {
    return (
        <div>
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/visit" element={<Visit />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
