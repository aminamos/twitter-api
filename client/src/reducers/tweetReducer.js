const initalState = {
  tweet: [],
  loading: false,
  error: ''
};

const tweetReducer = (state = initialState, action) => {
  const data = action.payload;

  switch (action.type) {
    case 'SET_TWEETS':
      return [...data];
    case 'ADD_TWEET':
      return;
    case 'REMOVE_TWEET':
      return;
    default:
      return state;
  }
};

export default tweetReducer;
