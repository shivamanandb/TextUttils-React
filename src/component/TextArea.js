import React, {useState} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function TextArea(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleToClear = () => {
        setText('');
        props.showAlert("Cleared", "success");
    }

    const cloc = () => {
        props.showAlert("Copy to Clipboard", "success");
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="myBox" value={text} onChange={handleOnChange} rows="8" placeholder="Enter Text Here"></textarea>
                </div>
                <button className=" btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="mx-2 btn btn-primary my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <CopyToClipboard text={text}>
                    <button className="btn btn-primary mx-2" onClick={cloc}>Copy to clipboard</button>
                </CopyToClipboard>
                <button className="mx-2 btn btn-primary my-2" onClick={handleToClear}>Clear All</button>
            </div>

            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h1 className="">Your text Summary</h1>
                <p> Total {text.split(" ").length-1} word(s) and {text.length} characters. </p>
                <p> {0.08*text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}