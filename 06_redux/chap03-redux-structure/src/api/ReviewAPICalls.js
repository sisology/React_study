import {getReviewlist} from "../modules/ReviewModules";
import {request} from "./api";

export function callGetReviewListAPI() {
    return async (dispatch, getState) => {

        const result = await request('GET', '/review');

        console.log('getReviewList result : ', result)

        dispatch(getReviewlist(result));
    }
}