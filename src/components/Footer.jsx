import React from 'react'

const Footer = (props) => {
  const image = props.image
  return(
    <footer className={(image) ? "myFooter" : "myFooterWithoutImg"}>Developed by Pablo Rodriguez</footer>
  )
}

export default Footer