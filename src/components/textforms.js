import React, { useState } from 'react'


export default function Textforms(props) {
    const handleupclick = () => {
        console.log("button was clicked" + text);
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("converted to uppercase", "success")
    }
    const handleloclick = () => {
        console.log("button was clicked" + text);
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showAlert("converted to lowercase", "success")
    }
    const handleclearclick = () => {
        console.log("button was clicked" + text);
        let newtext = "";
        settext(newtext);
        props.showAlert("cleared sucessfully", "success")
    }
    const sentenceCase = () => {
        let sentences = text.split(/(?<=\.)\s+/);
        let newText = sentences
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
            .join("\n ");
        settext(newText);
        props.showAlert("converted to sentenceCase", "success")
    };
    const handleonchange = (event) => {
        console.log("on change")
        settext(event.target.value)
    }
    const [text, settext] = useState('Enter text');
    return (
        <>
            <div className="container mb-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control  border-primary" onChange={handleonchange} value={text} id="box1" rows="8"> enter the text</textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick} type="submit">Convert to upppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleloclick} type="submit">Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={sentenceCase} type="submit">Convert to sentenceCase</button>
                <button className="btn btn-primary" onClick={handleclearclick} type="submit">Clear Text</button>
            </div>
            <div className='container'>
                <h2>Your summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <h3>Preview</h3>
                <p>{0.08 * text.split(" ").length} Minutes to Read</p>
                <div className="container  border border-primary p-3">
                    <p>{text.length>0?text :"enter the text to preview in the above box"}</p>
                </div>
            </div>
        </>
    )
}