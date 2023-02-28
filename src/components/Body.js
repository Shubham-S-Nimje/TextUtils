import React from 'react'
import Pageinfo from './Pageinfo'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

const Body = () => {
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

  return (
    <div className='container flex justify-content-center items-center'>
      <div className='row'>
      <Pageinfo />
        <div className='col-md-9'>
          <div className='row'>
          <form className='container'>
          <div className='row'>
          <div className='col'>
          <Button variant="primary" className='container my-2'>Bold</Button>
          </div>
          <div className='col'>
          <Button variant="secondary" className='container my-2'>Italic</Button>
          </div>
          <div className='col'>
          <Button variant="success" className='container my-2'>H1</Button>
          </div>
          <div className='col'>
          <Button variant="danger" className='container my-2'>H2</Button>
          </div>
          <div className='col'>
          <Button variant="warning" className='container my-2'>H3</Button>
          </div>
          <div className='col'>
          <Button variant="info" onClick={ConvertToUpperCase} className='container my-2'>Uppercase</Button>
          </div>
          <div className='col'>
          <Button variant="dark" onClick={ConvertToLowerCase} className='container my-2'>Lowercase</Button>
          </div>
          <div className='col'>
          <Button variant="success" onClick={ConvertToLowerCase} className='container my-2'>Copy</Button>
          </div>
          </div>
        <textarea className="form-control hidden-resize h-20"
        type='text'
        size="lg"
        rows='10'
        value={text}
        onChange={TextChangeHandler}>
        </textarea>
    </form>
          </div>
        </div>
        <div className='col bg-light p-3'>
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
  )
}

export default Body;
