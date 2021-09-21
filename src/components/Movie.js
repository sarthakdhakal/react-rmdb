import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import NoImage from '../images/no_image.jpg';
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
        </>
    );
};

export default Movie;