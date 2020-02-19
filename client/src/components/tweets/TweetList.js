import React from 'react'
import TweetBox from './TweetBox'
import { connect } from 'react-redux'

const TweetList = props => {

  function likeTweet(e) {
    console.log(e.target.id)
  }

  function deleteTweet() {
    console.log('deleted')
  }

  const tweetMap = props.tweets.map((tweet, i) => 
      <li key={tweet.id}>
        <TweetBox text={tweet.text} id={tweet.id} />
        <button id={tweet.id} onClick={e => likeTweet(e)}>like tweet</button>
        <button id={tweet.id} onClick={e => deleteTweet(e)}>delete tweet</button>
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