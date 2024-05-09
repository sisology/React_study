import {Link} from "react-router-dom";

function ReviewItem({review}) {
    return(
        <div className="reviewItem">
            <h3>제목 : {review.title}</h3>
            <h3>작성자 : {review.writer}</h3>
            <p>제목 : {review.content}</p>
        </div>
    );
}
export default ReviewItem;