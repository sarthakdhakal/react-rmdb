import React, { Component } from 'react';
import { Wrapper, Image } from './Thumb.styles';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css'
// import "./index.css";
const Thumb = ({ image, title, movieId, clicakble }) => (
    <Wrapper>
        {clicakble ? (

            <Link to={`/${movieId}`}>
                <Image src={image} alt="Movie Thumb" />

            </Link>
        ) : (
            <Image src={image} alt="Movie Thumb" />

        )}
        <div className='movie-title'>{title}</div>
    </Wrapper>
);
export default Thumb;