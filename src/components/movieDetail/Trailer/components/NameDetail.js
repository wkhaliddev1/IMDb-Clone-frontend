import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { checkBookmarkMovie, deleteBookmarkByID, fetchMovieDetailTrailer, postMovieBookmark } from '../logic/actions/trailerAction'
import movies_with_cover_photo from "../logic/utils/with_cover_photo"
import "../../../../css/NameDetail.css"
// import App from "../../App"
import { Route, useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { fetchBookmarkedMovies } from '../../../whatToWatch/logic/actions/bookmarkedActions'
import axios from 'axios'

function NameDetail(props) {
    const moviestate = useSelector(state => state.movieDetail.movie)
    const dispatch = useDispatch()
    const movie_id = window.location.pathname
    //getting the movie id only
    const id = movie_id.split('/').slice(-1) 

    useEffect(() => {  
        dispatch(fetchMovieDetailTrailer(id))  
    },[])

    if (!moviestate) {
        return (null)
    }
    
    const total_raing = (ratings) => {
        
    }

    const loginCheck = () => {
        if (sessionStorage.getItem('LogedUserEmail')){
            return true
        }
        return false
    }

    const addOrRemoveBookmarked = () => {
        if (!loginCheck()){
            window.sessionStorage.setItem('lastURL', window.location.href)
            window.location.assign("https://localhost:3000/login")
        } 
        dispatch(postMovieBookmark(id)) 
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-4 padding-0">
                    <h1>{moviestate.title}

                        <span  style={{'margin-left' : '8px'}}>
                            <i class="fa fa-bookmark" aria-hidden="true" onClick={addOrRemoveBookmarked} id="bookmark-icon"></i>
                        </span>
                        <span id="rating">
                            <i class="fa fa-star fa-xs"></i>
                            {moviestate.rating[0].rating} /10
                        </span>
                    </h1>
                </div>
            </div>
            <div id="heading-data" className="row">
                <div  className="col-12 mt-2 mb-3">
                    
                    <ul className="text-right">
                        <span id="heading-left" >
                        
                            <li>
                                {moviestate.release_date}
                            </li>
                            <li id="dot"> . </li>
                            <li>
                                {moviestate.rated}
                            </li>
                            <li id="dot"> . </li>
                            <li>
                                {moviestate.length}
                            </li>
                
                        </span>
                        <li> Cast & Crew  </li>
                        <li id="dot"> . </li>
                        <li> User Review  </li>
                        <li id="dot"> . </li>
                        <li> <i class="fa fa-share-alt fa-lg "></i> </li>
                        
                    </ul>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-3 padding-0" >
                    <img id="cover-image" src={"http://127.0.0.1:8000/media/"+moviestate.image[0].image} />
                </div>
                <div className="col-7 padding-0" id="cover-trailer" >
                    <ReactPlayer
                        url={moviestate.trailer[0].trailer}
                        playing = {true}
                        loop = {true}
                        // controls = {true}
                        // height = {400}
                        // width = {00}
                        muted = {true}
                    />
                </div>
                <div className="col-2 padding-0 ">
                    <div className="container padding-left-0">
                        <div className="row black-bg" >

                            <i class="fa fa-picture-o fa-5x m-5" aria-hidden="true"></i>
                        </div>
                        <div className="row black-bg" style={{"margin-top" : "6px"}}>

                            <i class="fa fa-file-video-o fa-5x m-5" aria-hidden="true"></i>
                        </div>

                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default connect() ( NameDetail )

