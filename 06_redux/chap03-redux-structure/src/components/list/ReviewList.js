import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callGetReviewListAPI} from "../../api/ReviewAPICalls";
import ReviewItem from "../item/ReviewItem";

function ReviewList() {

    const dispatch = useDispatch();
    const { reviewlist } = useSelector(state => state.reviewReducer);

    useEffect(() => {
        dispatch(callGetReviewListAPI());
    }, []);

    return(
        <div>
            { reviewlist && reviewlist.map(review => <ReviewItem key={review.id} review={review}/>)}
        </div>
    );
}

export default ReviewList;