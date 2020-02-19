import React from 'react'
import TweetBox from './TweetBox'
import { connect } from 'react-redux'
import { likeTweet } from '../../actions/index'

const TweetList = props => {

  function likeTweet(e) {
    const likedTweet = props.tweets.filter(tweet => tweet.id == e.target.id)
    props.likeTweet(likedTweet[0])
  }

  function deleteTweet() {
    console.log('deleted')
  }

  const tweetMap = props.tweets.map((tweet, i) => 
      <li key={tweet.id}>
        <TweetBox text={tweet.text} id={tweet.id} numLikes={tweet.num_likes} />
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

const mapDispatchToProps = dispatch => {
  return {
    likeTweet: (stateObject) => dispatch(likeTweet(stateObject))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
// export default connect(mapStateToProps)(TweetList)
