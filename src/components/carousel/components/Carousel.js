import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {fetchPersonalDetail} from "../../movies/logic/actions/movieActions"
import store from "../../index"

function Carousel(props) {

    // const style_carousel ={
    //     "width": "400px",
    //     "height": "400px",
    // }
    

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src= {props.movies[0].image} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.movies[1].image} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.movies[2].image} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            
        </div>
    )
}



function CarouselFeed(props) {

    const style = {
        "backgroundColor": "#1a1a1a",
        "color": "white",
    }
    const styleImg ={
        "width": "100%",
        "height": "auto",
        // "width": "100px",
        // "height": "200px",
    }
    //checking for images that are cover_photo of the movie
    const movie_with_cover = props.movies.filter((movie)=>movie.cover_photo)
    //Displaying only the movies with cover phot
    const movie_cards = movie_with_cover.map((movie, index) =>
        <Fragment key={index}>
            
            <div style={style} className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-6" >
                            <img style={styleImg} src={movie.image}></img>
                        </div>

                        <div className="col-6">
                            <div className="row">
                                <div className="card-header">{movie.movie.title}</div>
                                <button className="btn btn-dark">Trailer</button>
                            </div>
                            <div className="card-body">
                                {movie.movie.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>


        );

    return (
        <div>
        <h3>Up Next</h3>

        {movie_cards}
        </div>
  
    )
}

function CarouselPart() {

    const state = useSelector(state => state.movies);
    //const [movie, setMovie] = useState(state);
    const dispatch = useDispatch();
 
    //console.log("Testing : ", state.imgMovies[0].image)

    store.subscribe(() => {

        console.log('something happened' , store.getState())    
    });

    useEffect(() => {
        console.log('[UseEffect Corousel]')
        dispatch(fetchPersonalDetail());
    }, [])

   if  (state.imgMovies) {

    
    return (
        
        <div className="container" >
            <div className="row">
                <div className="col-8">   
                    <Carousel movies = {state.imgMovies}/>     
                </div>
                <div className="col-4">
                    <CarouselFeed movies = {state.imgMovies}/>
                </div>
            </div>
        </div>
        
    )
    } 
    else {
        return  (null)  // movies are fetched before first render
    }
}

export default connect()(CarouselPart);


// const mapStateToProps = (state) => {
//     return{
//       state
//     }
//   };

// const mapDispatchToProps = (dispatch) => {
// return {
//     onGetPersonalDetail: () => dispatch(fetchPersonalDetail())
// }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Carousel);


