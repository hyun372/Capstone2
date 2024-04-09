import NavBar from "./navBar";
import Home from "./pages/Home";
import Chunithm from "./pages/Chunithm";
import Maimaidx from "./pages/MaimaiDx";
import SoundVol from "./pages/SoundVol";
import SoundVolVal from "./pages/SoundVolVal";
import {Route, Routes} from "react-router-dom";

function App() {
    
    return(
        <>
            <NavBar />
            <div className = "container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chunithm" element={<Chunithm />} />
                    <Route path="/maimaidx" element={<Maimaidx />} />
                    <Route path="/soundvol" element={<SoundVol />} />
                    <Route path="/soundvolval" element={<SoundVolVal />} />
                </Routes>
            </div>
        </>
    )
}

export default App;