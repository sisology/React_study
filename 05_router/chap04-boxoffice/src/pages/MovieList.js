import {useEffect, useState} from "react";
import {getMovieList} from "../api/MovieAPI";
import MovieItem from "../component/MovieItem";

function MovieList() {

    const [movieList, setMovieList] = useState();

    useEffect(() => {
        getMovieList().then(data => setMovieList(data));
    }, []);

    return(
        <>
            <div className="content-row">
                {movieList && movieList.map(movie => <MovieItem key={movie.movieCd} movie={movie}/>)}
            </div>
        </>
    );
}

export default MovieList;