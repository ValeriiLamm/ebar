import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { errorActions } from '../store/slices/errorSlice';

export default function ErrorModal(props) {
  const errorMessage = useSelector(state => state.error.value);
  const dispatch = useDispatch()
  return (
    <div className='errorModal'>
      <p>{errorMessage}</p>
      <button onClick={(e) => {dispatch(errorActions.hideError())}}>Ok</button>
    </div>
  )
}
