import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

function Description() {
    const moviestate = useSelector(state => state.movieDetail.movie)
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-8">
                        
                        <h5>{moviestate.description}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()( Description )
