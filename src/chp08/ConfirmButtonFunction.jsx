import React, {useState} from "react";
import Button from "../chp04/Button";

function ConfirmButtonFunction() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm() {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)
    }

    return(
        <div>
            ConfirmButton Test Function Type &nbsp;
            <button onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed? "Confirmed" : "Check"}</button>
        </div>
    )
}

export default ConfirmButtonFunction;