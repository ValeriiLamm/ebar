import React from 'react'

export default function ErrorModal(props) {
  const {errorMessage, setErrorMessage} = props
  return (
    <div className='errorModal'>
      <p>{errorMessage}</p>
      <button onClick={(e) => {setErrorMessage('')}}>Ok</button>
    </div>
  )
}
