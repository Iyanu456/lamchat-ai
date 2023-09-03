"use client";
import Image from 'next/image';
import sendIcon from "../assets/icons/send-2.svg"

function PromptField(props) {
    return (
        <form 
            className="prompt-field"
            onSubmit={props.onSubmit}>
        <input placeholder={props.placeholder}
            value={props.value} 
            onChange={props.onChange}>
        </input>
        <button type={props.type} onClick={props.onClick}>
            <Image src={sendIcon} alt="material-icon"/>
        </button>
    </form>
    )
}

export default PromptField
