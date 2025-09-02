import React from "react";

function Clock(props) {
    return (
        <div>
            <h2 className='clock'>{new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;