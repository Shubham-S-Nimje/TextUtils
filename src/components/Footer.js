import React from 'react'

const Footer = (props) => {
  return (
  <footer className={`container text-center py-3 my-4 border-top text-${props.mode==='dark'?'light':'dark'}`}
  style={{backgroundColor:props.mode==='dark'?'#263238':'gray'}}>
      © 2021 Nimje Store, Design by Shubham S Nimje
  </footer>
  )
}

export default Footer
