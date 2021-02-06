import { combineReducers } from 'redux'
import { commentsReducer } from './commentsReducer';

export const allReducer = combineReducers({
    comments: commentsReducer
})

export default allReducer
