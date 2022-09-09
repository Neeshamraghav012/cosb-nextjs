import {CircularProgress, Rating} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import {REVIEWS} from "../../../../config/constants";

const ReviewCard = ({username, rating, review}) => {
    return (
        <div className={'flex flex-col p-2 border-1 rounded-md border-neutral-200 my-2'}>
            <span className={'text-sm font-semibold'}>{username}</span>
            <Rating
                name="read-only"
                value={rating}
                readOnly
            />
            <p>{review}</p>
        </div>
    )
}


const ReviewsMobile = ({className, id}) => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchReviews() {
            await axios.post(REVIEWS, {
                id: id
            })
                .then(res => {
                    setReviews(res.data)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetchReviews()
    }, [])


    return (
        <div className={'bg-white border-neutral-200 mt-5 px-5 flex flex-col ' + className}>
            <span className={'text-xl mt-4 font-bold'}>Reviews</span>
            <div className={'h-60'}>
                {isLoading ? (
                    <div className={'flex justify-center mt-5'}>
                        <CircularProgress/>
                    </div>
                ) : (
                    reviews.length === 0 ? (
                        <div className={'flex justify-center mt-5'}>
                            <span className={'text-sm text-gray-500'}>No Reviews Yet</span>
                        </div>
                    ) : (
                    reviews.map((review, index) => (
                        <ReviewCard key={index} username={review.user.username} rating={review.rating} review={review.review}/>
                    )))
                )}

            </div>
        </div>
    )
}

export default ReviewsMobile;