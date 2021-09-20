import React, { Component } from 'react';
import { Wrapper, Image } from './Thumb.styles';
// import 'bootstrap/dist/css/bootstrap.css'
// import "./index.css";
const Thumb = ({ image, title, movieId, clicakble }) => (
    <Wrapper>

        <Image src={image} alt="Movie Thumb" />

        <div className='movie-title'>{title}</div>
    </Wrapper>

);
export default Thumb;


