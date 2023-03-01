import React from 'react'

const Pageinfo = (props) => {
  return (
    <div className={`container rounded text-center m-3 text-${props.mode==='dark'?'light':'dark'}`}
    style={{backgroundColor:props.mode==='dark'?'#263238':'#e0e0e0'}}>
      <h1 className='m-3'>Your One-Stop Shop for Text Manipulation</h1>
      <p>TextUtils is a powerful online tool for manipulating
        and formatting text. With a wide range of features,
        including text case conversion, character count, string
        manipulation, and more, TextUtils is your go-to solution
        for all your text editing needs. Whether you're a student,
        writer, programmer, or just someone who works with text,
        TextUtils makes it easy to format, clean up, and transform
        your text quickly and easily.</p>
    </div>
  )
}

export default Pageinfo
