import { createStore } from "redux";
import rootReducer from "../reducers/index";

const initialState = {
    articles: [
        {
            id: 1,
            title: "Test 1"
        },
        {
            id: 2,
            title: "Test 2"
        }
    ]
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
