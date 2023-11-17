import React , {useState} from 'react'

export default function TextForm(props) {
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case" , "primary")
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case" , "primary")
    }
    const handleCpClick = ()=>{
        navigator.clipboard.writeText(text);        
        props.showAlert("Text Copied to Clipboard" , "primary")
    }
    const handleClClick = ()=>{
        setText('')
        props.showAlert("Text Cleared" , "danger")
    }
    const handleSpClick = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Turn the volume Up" , "warning")
    };
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
    <>
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter Text Here" id="myBox" rows="8" style={{backgroundColor : props.mode==='light'?'white':'black',color : props.mode==='light'?'black':'white'}} ></textarea>
            </div>  
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCpClick}>Copy to Clipboard</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpClick}>Listen</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</button>
        </div>
        <div className="container my-3">
             <h1>You Text Summary</h1>
             <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
             <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}