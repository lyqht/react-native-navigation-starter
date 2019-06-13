interface actionProps {
	type: string,
	payload: any
}

export default function (state = {}, action: actionProps) {
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}
}
