export const fetchTweets = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TWEETS' })
    // add loading screen/indicator
    fetch('http://localhost:3000/tweets/')
    .then(resp => resp.json())
    .then(obj => dispatch({ type: 'FETCH_TWEETS', payload: obj}))
  }
}

export const postTweet = () => {
}

export const getUsers = () => {
}
