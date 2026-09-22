import React from 'react'

function Faqs(props) {
  return (
    <div className="questions">
        <p>{props.question}</p>
        <span>{props.plus}</span>
    </div>
  )
}

export default Faqs