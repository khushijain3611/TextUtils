import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    const uppercaseclick =()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }
    const lowercaseclick =()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }
    const copyclick =()=>{
       
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const removeextraspaceclick =()=>{
        setText(text.split(/[ ]+/).join(" "));
        props.showAlert("Extra spaces removed", "success");
        
    }
    const handleOnChange =(event)=>{
    setText(event.target.value);
    }
    const cleanText = ()=>{
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const[text,setText]=useState("");
    
    return (
        <>
        <div className='container' style={{color : props.mode === 'light'? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control my-3" onChange={handleOnChange} id="mybox" value={text}   rows="8" style={{backgroundColor : props.mode === 'light'? 'white':'grey' , color: props.mode === 'light'? 'black':'white'}}></textarea>
            <button disabled={text.length===0} type="button" onClick={uppercaseclick} className="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
            <button disabled={text.length===0} type="button" onClick={lowercaseclick} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
            <button disabled={text.length===0} type="button" onClick={copyclick} className="btn btn-primary mx-1 my-1">Copy</button>
            <button disabled={text.length===0} type="button" onClick={removeextraspaceclick} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
            <button disabled={text.length===0} type="button" onClick={cleanText} className="btn btn-warning mx-1 my-1">Clear</button>
        </div>
        <div className="container my-3 " style={{color : props.mode === 'light'? 'black':'white'}} >
            <h2>Your Text Summary </h2>
            <p>{text.split(/\s+/).filter(String).length} Words {text.length} Characters</p>
            <p>{0.008*text.split(/\s+/).filter(String).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
