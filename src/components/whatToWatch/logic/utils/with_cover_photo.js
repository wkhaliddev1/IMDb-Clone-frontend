
function movies_with_cover_photo (movies){
    //return the movies that has cover photos
    //input=> store.movies.imgMovies
    //output=> array of movies having cover photos
    return movies.filter((movie) =>movie.cover_photo)

};
export default movies_with_cover_photo;