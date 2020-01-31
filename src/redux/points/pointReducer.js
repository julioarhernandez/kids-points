import { ADD_POINT } from "./pointTypes";

const initialState = {
    points: 2
}
const pointReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POINT: return {
            ...state,
            points: state.points + 1
        }
        default: return state
    }
}

export default pointReducer;