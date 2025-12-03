import React from "react";

function Header({mode, setMode}) {
    const toggle = () => setMode(mode === "light" ? "dark" : "light");

    return (
        <button className="mode-toggle" onClick={toggle}>
            🌓 Mode
        </button>
    );
}

export default Header;