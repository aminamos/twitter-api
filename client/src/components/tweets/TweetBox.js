import React from 'react'
import TweetText from './TweetText'
// import TweetLikes from './TweetLikes'

const TweetBox = props => {
  return (
    <div className='tweet'>
      <TweetText text={props.text} numLikes={props.numLikes} />
    </div>
  )
}

export default TweetBox