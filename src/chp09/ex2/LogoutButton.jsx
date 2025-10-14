import React from "react";

function LogoutButton() {
    return (
        <button onClick={props.onClick} style={{background:'orange', color:'black'}}>로그아웃</button>
    );
}

export default LogoutButton;