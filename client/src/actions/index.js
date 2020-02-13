export const fetchTweets = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_TWEETS' });
    // add loading screen/indicator
    fetch('http://localhost:3000/tweets')
      .then(resp => resp.json())
      .then(obj => dispatch({ type: 'FETCH_TWEETS', payload: obj }));
  };
};

export const postTweet = tweetText => {
  return dispatch => {
    let eventObj = {
      tweet: {
        text: tweetText
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
      // .then(obj => console.log(obj))
      .then(obj => dispatch({ type: 'POST_TWEETS', payload: obj }));
  };
};

export const getUsers = () => {};
