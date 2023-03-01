import React from 'react'
import Pageinfo from './Pageinfo'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Body = (props) => {
  const TextChangeHandler = (event) => {
    console.log('TextChangeHandler changed')
    settext(event.target.value);
  }
  const [text, settext] = useState('');

    const ConvertToUpperCase = () => {
      let newtext = text.toUpperCase();
        settext(newtext);
        console.log('clicked on button'); 
    }

    const ConvertToLowerCase = () => {
      let newtext = text.toLowerCase();
        settext(newtext);
        console.log('clicked on button'); 
    }

    const Copytext = () => {
      let newtext = document.getElementById('mybox')
      newtext.select();
        navigator.clipboard.writeText(newtext.value);
        console.log('clicked on Copytext'); 
    }

    const removeExtraSpace = () => {
      let newtext = text.split(/[ ]+/);
      settext(newtext.join(" ")); 
    }

    const clearText = () => {
      settext(''); 
    }
    


  return (
    <div >
    <div className='container flex justify-content-center items-center'>
      <div className='row container'>
      <Pageinfo mode={props.mode} togglemode={props.togglemode}/>
      </div>
      <div className='row'>
        <div className='col-md-9'>
          <div className='row'>
          <form className='container'>
          <div className='row'>
          <div className='col'>
          <Button variant="primary" onClick={ConvertToUpperCase} className='container my-2'>Uppercase</Button>
          </div>
          <div className='col'>
          <Button variant="secondary" onClick={ConvertToLowerCase} className='container my-2'>Lowercase</Button>
          </div>
          <div className='col'>
          <Button variant="success" onClick={Copytext} className='container my-2'>Copy</Button>
          </div>
          <div className='col'>
          <Button variant="danger" onClick={clearText} className='container my-2'>Clear</Button>
          </div>
          <div className='col'>
          <Button variant="warning" onClick={removeExtraSpace} className='container my-2'>Remove Extra Space</Button>
          </div>
          </div>
        <textarea className={`form-control my-3 hidden-resize h-20`}
        style={{backgroundColor:props.mode==='dark'?'#e0e0e0':'#e0e0e0'}}
        type='text'
        size="lg"
        rows='10'
        value={text}
        id='mybox'
        onChange={TextChangeHandler}>
        </textarea>
    </form>
          </div>
        </div>
        <div className='col p-3 m-3 rounded'
        style={{backgroundColor:props.mode==='dark'?'#e0e0e0':'#e0e0e0'}}>
          <h5>Text Summary :</h5>
          <p>Reading time : <span className='fw-bold'>{0.008 * text.split(' ').length} Minutes</span></p>
          <p>Letters : <span className='fw-bold'>{text.split(" ").join("").length}</span></p>
          <p>Characters : <span className='fw-bold'>{text.length}</span></p>
          <p>Words : <span className='fw-bold'>{text.split(' ').length-1}</span></p>
          <p>Sentences : <span className='fw-bold'>{text.split('.').length-1}</span></p>
          <p>Paragraphs : <span className='fw-bold'>{text.split(/\r?\n/).length-1}</span></p>
        </div>
      </div>      
    </div>
    </div>
  )
}

export default Body;
