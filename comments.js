
import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

const initialState = {
	comments: [],
	users: []
};

function reducer(state = [], action) {
	switch (action.type) {
		case ADD_COMMENT: 
			return Object.assign({}, state, {
				comments: [
				{
					id: action.id,
					text: action.text,
					votes: 0
				}
				, ...state]
			});
		case EDIT_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments((comment.id, comment.text) => comment.text)
			});
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter((comment) => comment.id !== action.id)
			});
		case THUMB_UP_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments((comment.id) => thumb: 'up')
			});
		case THUMB_DOWN_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments((comment.id) => thumb: 'down')
			});
		default:
			return: state;
	}
}

export default comments;