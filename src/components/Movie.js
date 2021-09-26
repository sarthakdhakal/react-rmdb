import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import NullImage from '../images/no_image.jpg';
import MovieInfoBar from './MovieInfoBar';
import Actors from './Actors';
import { useMovieFetch } from '../Hooks/useMovieFetch';
const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);
    // console.log(movie);
    if (loading) return <Spinner />;
    if (error) return <h1>Error</h1>;
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo
                image={
                    movie.poster_path ?
                        IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NullImage
                }
                movie={movie} />
            <MovieInfoBar
                time={movie.runtime} budget={movie.budget} revenue={movie.revenue} profit={movie.revenue - movie.budget} />
            <Grid header="Actors">
                {movie.actors.map((actor) => (
                    <Actors key={actor.crediyt_id} name={actor.name}
                        character={actor.character}
                        imgUrl={
                            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NullImage
                        } />))
                }
            </Grid>
        </>
    );
};

export default Movie;