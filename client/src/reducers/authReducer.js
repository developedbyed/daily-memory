const initState = null;

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload || false;
        default:
            return state;
    }
}

export default authReducer;