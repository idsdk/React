import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";

import LandingPage from "./LandingPage";
import UniversePage from "./UniversePage";
import TopicPage from "./TopicPage";
import Header from "./Header";

function App() {
    const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");

    useEffect(() => {
        const darkImg = new Image();
        darkImg.src = process.env.PUBLIC_URL + "/ImaginationGrapper/BackGrounds/dark.png"

        const lightImg = new Image();
        lightImg.src = process.env.PUBLIC_URL + "/ImaginationGrapper/BackGrounds/light.png"
    }, []);

    useEffect(() => {
        document.body.className = mode === "light" ? "light-mode" : "dark-mode";
        localStorage.setItem("mode", mode);
    }, [mode]);

    return (
        <>
            <Header mode={mode} setMode={setMode}/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/universe" element={<UniversePage/>}/>
                <Route path="/topics/:name" element={<TopicPage/>}/>
            </Routes>
        </>
    );

}

export default App;