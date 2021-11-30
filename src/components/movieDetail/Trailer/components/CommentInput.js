import React, { useState } from 'react'
import '../../../../css/CommentInput.css'
import { fetchMovieDetailComments, postComment } from '../logic/actions/commentAction'
import { useDispatch } from 'react-redux'


function CommentInput(props) {
    const [comment, setcomment] = useState("")
    // const moviestate = useSelector(state => state.movieDetail.movie)
    const dispatch = useDispatch()

    const inputHandler = (event) => {
        setcomment( event.target.value )
    }
    const handleSubmit = (event) => {
        console.log(comment)
        const commentData = {
            "movie": props.movieID,
            "user": 
                [sessionStorage.getItem('LogedUserID')],
            "comment": 
                comment 
            }
        dispatch(postComment(commentData))
        //Making the input to None after a comment is posted
        const input = document.querySelector('#input-comment')
        input.value = ""
        // window.location.reload(true); 
    }

    return (
        <div className=" mt-2">
            <form onSubmit={handleSubmit}>
                <div className="col-6">
                    <input 
                        id="input-comment"
                        className="comment-input form-control" 
                        type="text" 
                        placeholder="Enter Comment" 
                        // value={comment}
                        onChange={inputHandler}>
                    </input>
                </div>
                <div className="col-2 mt-1">
                    <button id="button-post" type="button" class="btn btn-light" onClick={handleSubmit}>Post</button>
                </div>
            </form>
        </div>
    )
}

export default CommentInput
