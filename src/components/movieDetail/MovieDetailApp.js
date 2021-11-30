import React from 'react'
import Bookmarkbutton from './Trailer/components/Bookmarkbutton'
import Comments from './Trailer/components/Comments'
import Description from './Trailer/components/Description'
import Genres from './Trailer/components/Genres'
import NameDetail from './Trailer/components/NameDetail'
import Synopsis from './Trailer/components/Synopsis'


function MovieDetailApp() {
    console.log(sessionStorage.getItem('LogedUserFirstName'))
    return (
        <div>
            <NameDetail />
            {/* <Bookmarkbutton /> */}
            <Genres />
            <Description />
            <Synopsis />
            <Comments />
            
        </div>
    )
}


export default MovieDetailApp
