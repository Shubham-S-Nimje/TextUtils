import React from 'react'
import Pageinfo from './Pageinfo'
import Textpreview from './Textpreview'
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
  return (
    <div className='container flex justify-content-center items-center'>
      <div className='row'>
      <Pageinfo />
        <div className='col-md-8'>
          <div className='row'>
          <form className='container'>
        <textarea className="form-control hidden-resize h-20"
        type='text'
        size="lg"
        rows='10'
        value={text}
        onChange={TextChangeHandler}>
        </textarea>
    </form>
          </div>
          <div className='row'>
              <Textpreview />
          </div>
        </div>
        <div className='col text-center'>
          <p>Convert To:</p>
          <Button variant="primary" onClick={ConvertToUpperCase}>Uppercase</Button>
        </div>
      </div>      
    </div>
  )
}

export default Body;
