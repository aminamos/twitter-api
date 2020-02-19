export const fetchTweets = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_TWEETS' });
    // add loading screen/indicator
    fetch('http://localhost:3000/tweets')
      .then(resp => resp.json())
      .then(obj => dispatch({ type: 'FETCH_TWEETS', payload: obj }));
  };
};

export const postTweet = state => {
  return dispatch => {
    let eventObj = {
      tweet: {
        text: state.text,
        num_likes: 0,
        num_retweets: 0
      }
    }

    let configObj = {
      method: 'POST',
      body: JSON.stringify(eventObj),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };

    fetch('http://localhost:3000/tweets',configObj)
      .then(resp => resp.json())
      .then(obj => dispatch({ type: 'POST_TWEET', payload: obj }));
  };
};

export const likeTweet = tweet => {
  return dispatch => {
    let eventObj = {
      tweet: {
        num_likes: tweet.num_likes + 1
      }
    }

    let configObj = {
      method: 'PATCH',
      body: JSON.stringify(eventObj),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    
    fetch(`http://localhost:3000/tweets/${tweet.id}`,configObj)
      .then(resp => resp.json())
      .then(obj => dispatch({ type: 'LIKE_TWEET', payload: tweet}));
  };
}

// when user functionality is added
export const getUsers = () => {};
