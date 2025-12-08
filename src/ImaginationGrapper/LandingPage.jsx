import React from "react";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const nav = useNavigate();
    return(
        <div className="landing centered">
            <h1 className="logo" onClick={() => nav("/universe")}>Imagination Grapper</h1>
            <p className="subtext">Click to Enter Your Cosmos</p>
        </div>
    );
}

export default LandingPage;