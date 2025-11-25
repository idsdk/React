import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilVerdict from "../ex1/BoilVerdict";
import './Calculator.css'

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = Math.round(convert(input)*1000) / 1000;
    return output.toString();
}

function toCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9; //F => C로 변경하는 수식
}

function toFahrenheit(celsius){
    return celsius * 9 / 5 + 32;
}

function Calculator() {
    const[temperature, setTemperature] = useState("");
    const[scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const celsius = scale === "c" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "f" ? tryConvert(temperature, toFahrenheit) : temperature;

    const handleBubbleBurst = (e) => {
        const bubble = e.target;

        // 이미 터진 기포는 무시
        if (bubble.classList.contains("bursting")) return;

        bubble.classList.add("bursting"); // 중복 방지
        bubble.style.opacity = 0;         // 기포 사라짐

        const rect = bubble.getBoundingClientRect();
        const container = document.body; // 파티클을 body 기준으로 뿌림

        // 파티클 6개 생성 (원한다면 개수 조절 가능)
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement("div");
            particle.className = "bubble-particle";

            // 파티클 출발 위치
            particle.style.position = "fixed";
            particle.style.left = rect.left + rect.width / 2 + "px";
            particle.style.top = rect.top + rect.height / 2 + "px";

            // 랜덤 이동값
            const tx = (Math.random() - 0.5) * 120;
            const ty = (Math.random() - 0.5) * 120;

            particle.style.setProperty("--tx", `${tx}px`);
            particle.style.setProperty("--ty", `${ty}px`);

            container.appendChild(particle);

            // 애니메이션 끝나면 삭제
            setTimeout(() => {
                particle.remove();
            }, 450);
        }

        // 기포 자체 삭제
        setTimeout(() => {
            bubble.remove();
        }, 150);
    };

    return (
        <div className="calculator-bg">
            <div className="heat-spark" />
            <div className="calculator-container">
                <h1>온도 변환기</h1>
                <TemperatureInput scale={"c"} temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
                <TemperatureInput scale={"f"} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
                <BoilVerdict celsius={parseFloat(celsius)}/>
            </div>

            {/* 배경 기포들: DOM에 여러개 추가하면 다양한 사이즈/속도로 떠오름 */}
            <div className="bubble b1" onClick={handleBubbleBurst}></div>
            <div className="bubble b2" onClick={handleBubbleBurst}></div>
            <div className="bubble b3" onClick={handleBubbleBurst}></div>
            <div className="bubble b4" onClick={handleBubbleBurst}></div>
            <div className="bubble b5" onClick={handleBubbleBurst}></div>
            <div className="bubble b6" onClick={handleBubbleBurst}></div>
        </div>
    );
}

export default Calculator;