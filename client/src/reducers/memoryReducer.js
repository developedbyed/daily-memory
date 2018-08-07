const initState = [];

const memoryReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_MEMORY":
            return [action.payload, ...state];
        case "GET_MEMORY":
            return action.payload;
        case "DELETE_MEMORY":
            return state.filter(memory => memory._id !== action.payload);
        default:
            return state;
    }
}

export default memoryReducer;