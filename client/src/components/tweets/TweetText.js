import React from 'react'

const TweetText = props => {
  return (
    <div className='tweet-text'>
      {props.text}
      <br></br>
      Number of likes: {props.numLikes}
    </div>
  )
}

export default TweetText