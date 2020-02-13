import React from 'react'
import Tweet from './Tweet'
import { connect } from 'react-redux'

const TweetList = props => {
  const tweetMap = props.tweets.map(tweet => {
    return (
      <li><Tweet key={tweet.id} text={tweet.text} /></li>
    )
  })
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