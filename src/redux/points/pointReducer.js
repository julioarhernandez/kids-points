import {ADD_POINT, DEC_POINT, REDEEM_POINT} from "./pointTypes";
import LocalStorage from "../../helpers/localStorage/localStorage";

const key = 'kids-points';
const storage = new LocalStorage(key);

// Update value
const getValue = () => storage.getItem(key) || 0;

const initialState = {
    points: getValue()
}
const pointReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POINT:
            return {
                ...state,
                points: state.points + 1
            }
        case DEC_POINT:
            return {
                ...state,
                points: state.points - 1
            }
        case REDEEM_POINT:
            return {
                ...state,
                points: state.points - 5
            }
        default:
            return state
    }
}

// const animationReducer

export default pointReducer;