import React, {useState} from "react";
import "./InputTest.css"

function InputTest () {
    const[inputValue,setInputValue]=useState("");
    function handleChange(event) {
        setInputValue(event.target.value);
    }

    // const handleChange2 = (event) => {
    //      setInputValue(event.target.value);
    // }

    return(
        <div className={"background"}>
            <h3 className={"h3-color"}>아래의 텍스트 박스에 입력내용이 변결될 때마다 텍스트 박스 아래에 표시됩니다.</h3>
            <input size={50} type="text" onChange={handleChange} placeholder={"Input Text..."}/>
            <h2 className={"h2-color"} id={"result"}>입력된 내용: {inputValue}</h2>
        </div>
    )
}

export default InputTest;