import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import LandingPage from "./LandingPage";
import UniversePage from "./UniversePage";
import TopicPage from "./TopicPage";
import Header from "./Header";

function App() {
    const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");

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
                <Route path="/otpics/:name" element={<TopicPage/>}/>
            </Routes>
        </>
    );

}

export default App;