import React from 'react'
import TweetText from './TweetText'

const TweetBox = props => {
  return (
    <div className='tweet'>
      <TweetText text={props.text} />
    </div>
  )
}

export default TweetBox