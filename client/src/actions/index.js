export const fetchTweets = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TWEETS' })
    fetch('http://localhost:3000/tweets/')
    .then(resp => resp.json())
    // .then(obj => dispatch({ type: 'GET_TWEETS', tweets: obj.tweets }))
    // .then(obj => console.log(obj))
    .then(obj => dispatch({ type: 'FETCH_TWEETS', tweets: obj}))
  }
}

export const postTweet = () => {
}

export const getUsers = () => {
}
