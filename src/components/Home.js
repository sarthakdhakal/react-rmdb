import React, { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { useHomeFetch } from "../Hooks/useHomeFetch";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import Button from './Button';
import SearchBar from "./SearchBar";
import NullImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
  //   const {results}=state;
  //   console.log(results);
  //   console.log(state.results[0]);
  if (error) {
    return <div>Error persists </div>;
  }
  return (
    <>
      {!searchTerm && state.results[0] ? (<HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview} />) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Best Matches' : 'Popular Movies'}>
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clicakble={true}
            image={
              movie.poster_path ?
                IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NullImage
            }
            title={movie.original_title}
            movieId={movie.id} />
        ))}
      </Grid>
      {console.log(loading)}
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>

    //yaha hera hai ta i leave it to you now

  )
};

export default Home;
