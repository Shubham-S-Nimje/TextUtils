import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'


const Buttons = (props) => {
    const [title, setTitle] = useState('');
    const ConvertToUpperCase = () => {
        let newtext = title;
        setTitle(newtext);
        console.log(title); 
    }
  return (
    <div className='container items-center text-center'>
        <Button variant="primary" onClick={ConvertToUpperCase}>Uppercase</Button>
    </div>
  )
}

export default Buttons
