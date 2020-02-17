import React from 'react'
import Tweet from './Tweet'
import { connect } from 'react-redux'

const TweetList = props => {

  function likeTweet() {
    console.log('liked')
  }

  function deleteTweet() {
    console.log('deleted')
  }

  const tweetMap = props.tweets.map((tweet, i) => 
      <li key={tweet.id}>
        <Tweet text={tweet.text} />
        <button onClick={() => likeTweet()}>like tweet</button>
        <button onClick={() => deleteTweet()}>delete tweet</button>
      </li>
  )

  return (
    <ul>
      {tweetMap}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    tweets: state.tweet.tweets,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(TweetList)