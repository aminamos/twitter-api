import React, { Component } from 'react';
import TweetList from '../components/tweets/TweetList'
import TweetInput from '../components/tweets/TweetInput'

class TweetContainer extends Component {
  render() {
    return (
      <div>
        <TweetInput />
        <TweetList />
      </div>
    );
  }
}

export default TweetContainer;
