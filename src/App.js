import "./App.css";
import Home from "./Pages/Home";
function App() {
    return (
        <div>
            <div className="header">
                <h1>Welcome to Broken City Coffee</h1>
                <h1>Where creativity finds its perfect blend</h1>
            </div>
            <img src="/favicon.ico" alt="logo" />
            <Home />
        </div>
    );
}

export default App;
