import {createActions, handleActions} from "redux-actions";

const initialState = {};

const GET_REVIEWLIST = 'review/GET_REVIEWLIST';

export const { review : { getReviewlist } } = createActions({
    [GET_REVIEWLIST] : result => ({ reviewlist : result})
});

const reviewReducer = handleActions({
    [GET_REVIEWLIST] : (state, {payload}) => payload
}, initialState);

export default reviewReducer;