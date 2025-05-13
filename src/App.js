import './App.css';
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Awaits from "./components/awaits/Awaits";
import Bonuses from "./components/bonuses/Bonuses";
import ProgressBar from "./components/progressBar/ProgressBar";
import PricingPage from "./components/pricing/PricingPage";
import Calculator from "./components/calculator/Calculator";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <About></About>
            <Awaits></Awaits>
            <Bonuses></Bonuses>
            <ProgressBar value={16} max={100} label="ВВЕДИТЕ СВОЙ ВОЗРАСТ" />
            <PricingPage></PricingPage>
            <Calculator></Calculator>
            <Footer></Footer>
        </div>
    );
}

export default App;
