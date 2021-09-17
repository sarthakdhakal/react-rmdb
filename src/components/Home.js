import React, { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { useHomeFetch } from "../Hooks/useHomeFetch";


import NullImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  // console.log(state);
  console.log(state.results[0])
  return (
    <>
      {state.results[0] ? (<HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview} />) : null}</>

  )
};

export default Home;
