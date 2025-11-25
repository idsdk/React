import React from "react";
import FancyBorder from "./FancyBorder";

function Dialog({ title, message }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    );
}

export default function App() {
    return (
        <FancyBorder>
            <Dialog title="Dialog 1" message="첫 번째 대화창" />
            <Dialog title="Dialog 2" message="두 번째 대화창" />
            <Dialog title="Dialog 3" message="세 번째 대화창" />
        </FancyBorder>
    );
}
