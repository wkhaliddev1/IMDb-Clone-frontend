import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import '../../../../css/synopsis.css'

function Description() {
    const moviestate = useSelector(state => state.movieDetail.movie)
    if (!moviestate.synopsis) {
        return (null)
    }
    return (
        <div>
            
            <div className="container">
            <hr/>
                <div className="row mt-2"> 
                    <div className="col-8">
                        <h3>Synopsis</h3>
                        <h5 id="synopsis">{moviestate.synopsis}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()( Description )
