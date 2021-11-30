import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPersonalDetail } from '../../movies/logic/actions/movieActions'
import movies_with_cover_photo from "../logic/utils/with_cover_photo"
import "../../../css/featureToday.css"
import App from "../../App"
import { Route, useLocation } from 'react-router-dom'

function NameDetail(props) {
    movies = useSelector(state.movies.imgMovies)

    return (
        <div>
            Here
        </div>
    )
}

export default connect() ( NameDetail )

