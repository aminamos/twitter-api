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
      return state
    case 'REMOVE_TWEET':
      return state;
    default:
      return state;
  }
};

export default tweetReducer;
