const initialState = {
  tweet: [],
  loading: false,
  error: ''
};

const tweetReducer = (state = initialState, action) => {
  const data = action.payload;

  switch (action.type) {
    case 'GET_TWEETS':
      // return [...data];
      return state
    case 'ADD_TWEET':
      return state
    case 'REMOVE_TWEET':
      return;
    default:
      return state;
  }
};

export default tweetReducer;
