import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(pl) {
    console.log(pl);
    return {
        type: ADD_ARTICLE,
        payload: pl
    };
}
