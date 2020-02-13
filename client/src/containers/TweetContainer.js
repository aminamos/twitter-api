import React, { Component } from 'react';
import TweetList from '../components/tweets/TweetList'

class TweetContainer extends Component {
  render() {
    return (
      <div>
        <TweetList />
      </div>
    );
  }
}

export default TweetContainer;
