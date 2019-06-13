import { combineReducers } from 'redux';

import postsReducer from './template-screens/posts.reducer';

const rootReducer = combineReducers({
	posts: postsReducer
});

export default rootReducer;
