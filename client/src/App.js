import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTweets } from './actions/index'
import TweetContainer from './containers/TweetContainer'
import UserContainer from './containers/UserContainer'

class App extends Component{

  componentDidMount() {
    this.props.fetchTweets()
  }

render() {
    return(
      <div>
        <TweetContainer tweets={this.props.tweets}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweet.tweets,
    loading: state.loading
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
