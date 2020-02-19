import React from 'react'

const TweetLikes = props => {
  return (
    <div className='tweet-likes'>
      {props.numLikes}
    </div>
  )
}

export default TweetLikes