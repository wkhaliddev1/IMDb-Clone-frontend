import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCommentByID, fetchMovieDetailComments } from '../logic/actions/commentAction'
import { useEffect } from 'react'
import '../../../../css/Comment.css'
import CommentInput from './CommentInput'
import LoginFirst from './LoginFirst'
import { connect } from 'react-redux'
import { fetchMovieDetailTrailer } from '../logic/actions/trailerAction'

function Comments() {
    // const comments = useSelector(state => state.movieDetail.comments)
    const moviestate = useSelector(state => state.movieDetail.movie)
    const movie_id = window.location.pathname
    //getting the movie id only
    const id = movie_id.split('/').slice(-1) 
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(fetchMovieDetailComments(id))
    }, [])

    if (!moviestate) {
        return (null)
    }
    // console.log("comments", moviestate.comment)

    const comment = moviestate.comment

    const UserCheck = (email) => {
        if (email === sessionStorage.getItem('LogedUserEmail')){
            return true
        }
    }

    const deleteHandler = (comment_id) => {
        // Checking if the comment of LogedIn User or not
        const logedInUser = sessionStorage.getItem('LogedUserEmail')
        const result = moviestate.comment.filter(comments => comments.id === comment_id)
        const user = result[0].user[0]
        if (user.email === logedInUser) {
            dispatch(deleteCommentByID(comment_id, id))
            // window.location.reload(true); 
            // dispatch(fetchMovieDetailTrailer(id))
            
        }
    }

    const editHandler = (comment_id) => {
        // Checking if the comment of LogedIn User or not
        const logedInUser = sessionStorage.getItem('LogedUserEmail')
        const result = moviestate.comment.filter(comments => comments.id === comment_id)
        const user = result[0].user[0]
        if (user.email === logedInUser) {
            return true
        }
    }

    const userDetail = (userID) => {
        window.location.assign("https://localhost:3000/userID/" + userID)
    }

    const commentsDiv = comment.map((com) => 
        <div key={com.id} className="row justify-content-left mt-1">
            <div className="comment col-10">
                <div>
                    
                    <div id="padding-top-2">
                       {com.comment}
                    </div> 
                </div>
                <div>
                    <div id="user" >
                        {
                            UserCheck(com.user[0].email) ? 
                            <i class="fa fa-sign-in" aria-hidden="true" ></i> : 
                            <i class="fa fa-user" aria-hidden="true"></i>
                        }
                        
                        <span onClick={() => userDetail(com.user[0].id)}>{" " + com.user[0].first_name +" "+com.user[0].last_name}</span>
                        
                    </div>
                </div>
                <div>

                    <div>
                        <i id="padding-left-right-10" class="fa fa-pencil clickable" aria-hidden="true" 
                            // onClick={()=>editHandler(com.id) ? <button className="btn btn-light">edit</button> : null}></i>
                            onClick={()=>editHandler(com.id) ? <p>12313</p> : null}></i>

                        <i id="" class="fa fa-trash clickable" aria-hidden="true" 
                            onClick={()=>deleteHandler(com.id)}></i>
                    </div>

                </div>
            </div>
        </div>
        );

    console.log(commentsDiv)

    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-12">
                    <h3 id="padding-0">Reviews <i class="fa fa-comments fa-lg" aria-hidden="true"></i> </h3>

                    {commentsDiv}
                    <div className="row justify-content-center mt-4">
                        <div className="col-11">
                            Write a Comment
                            {sessionStorage.getItem('LogedAccessToken') ? <CommentInput movieID={id}/> : <LoginFirst />}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default connect() (Comments)
