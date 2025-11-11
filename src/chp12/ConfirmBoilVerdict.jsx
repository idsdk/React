import React, { useState } from "react";
import BoilVerdict from "./BoilVerdict";
import "./ConfirmBoilVerdict.css"; // 🔥 CSS 파일 import

function ConfirmBoilVerdict() {
    const [temperature, setTemperature] = useState("");

    const handleTemperature = (event) => {
        setTemperature(event.target.value);
    };

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요</legend>
            <input
                value={temperature}
                onChange={handleTemperature}
            />
            <BoilVerdict celsius={parseInt(temperature)} />
        </fieldset>
    );
}

export default ConfirmBoilVerdict;
