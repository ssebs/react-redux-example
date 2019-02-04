import { ADD_ARTICLE, DEL_ARTICLE } from "../constants/action-types";

export function addArticle(pl) {
    return {
        type: ADD_ARTICLE,
        payload: pl
    };
}

export function delArticle(pl) {
    return {
        type: DEL_ARTICLE,
        id: pl
    }
}