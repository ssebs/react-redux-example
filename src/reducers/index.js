import { ADD_ARTICLE, DEL_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign(
                {},
                {
                    articles: state.articles.concat(action.payload)
                }
            );
        case DEL_ARTICLE:
            return {articles: [...state.articles].filter(art => art.id  !== action.id)};
        default:
            return state;
    }
}

export default rootReducer;
