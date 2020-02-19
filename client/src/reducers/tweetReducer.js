const initialState = {
  tweets: [],
  loading: false
  // add error
};

const tweetReducer = (state = initialState, action) => {
  console.log(action)
  
  switch (action.type) {
    case 'LOADING_TWEETS':
      return {
        ...state,
        tweets: [...state.tweets],
        loading: true
      }
    case 'FETCH_TWEETS':
      return {
        ...state,
        tweets: action.payload,
        loading: false
      }
    case 'POST_TWEET':
      
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
      }
    case 'REMOVE_TWEET':
      const tweetsToKeep = state.tweets.filter(tweet => tweet.id !== action.payload.id)
      
      return {...state, tweets: tweetsToKeep}
    case 'LIKE_TWEET':
      const tweetToUpdate = state.tweets.filter(tweet => tweet.id == action.payload.id)

      tweetToUpdate[0].num_likes += 1
      
      return {...state, tweets: [...state.tweets]}
    default:
      return state;
  }
};

export default tweetReducer;
