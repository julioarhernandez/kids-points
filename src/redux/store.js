import {createStore} from "redux";
import pointReducer from "./points/pointReducer";

const store = createStore(pointReducer);

export default store;