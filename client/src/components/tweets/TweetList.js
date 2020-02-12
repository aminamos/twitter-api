import React from 'react'
import Tweet from './Tweet'

const TweetList = props => {
  const tweetMap = props.tweets.map(tweet => {
    return (
      <Tweet key={tweet.id} text={tweet.text} />
    )
  })
  return (
    <ul>
      {tweetMap}
      <hr></hr>
    </ul>
  )
}



export default TweetList