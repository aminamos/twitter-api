import React from 'react'

const Tweet = props => {
  return (
    <div className='tweet'>
      {props.text}
    </div>
  )
}

export default Tweet