import React, { useState } from "react";
import "./Reservation.css"; // ✅ 같은 폴더 안
import backgroundImage from "./imgs/ResBackgroundImage.jpg"; // ✅ imgs 폴더 안

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`아침식사 여부: ${haveBreakfast ? "예" : "아니오"}, 방문객 수: ${numberOfGuest}`);
    };

    return (
        <div
            className="reservation-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        아침식사 여부:
                        <input
                            type="checkbox"
                            checked={haveBreakfast}
                            onChange={(event) => setHaveBreakfast(event.target.checked)}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        방문객 수:
                        <input
                            type="number"
                            min="1"
                            value={numberOfGuest}
                            onChange={(event) => setNumberOfGuest(event.target.value)}
                        />
                    </label>
                </div>

                <button type="submit">제출</button>
            </form>
        </div>
    );
}

export default Reservation;
