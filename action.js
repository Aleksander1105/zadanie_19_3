import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		text,
		id: id
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	}
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id,
		thumb: 'up'
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id,
		thumb: 'down'
	}
}

export  {ADD_COMMENT};
export  {addComment};
export  {EDIT_COMMENT};
export  {editComment};
export  {REMOVE_COMMENT};
export  {removeComment};
export  {THUMB_UP_COMMENT};
export  {thumbUpComment};
export  {THUMB_DOWN_COMMENT};
export  {thumbDownComment};