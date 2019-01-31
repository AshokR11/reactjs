const Reducer = (state=[],action) => {
	switch(action.type){
		case 'ADD_POST':
			return state.concat([action.data])
	}

}
export default Reducer