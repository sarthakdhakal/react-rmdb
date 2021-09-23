import React, { Component } from 'react';
import Thumb from '../Thumb';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpg';
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                clicakble={false}
                alt={movie.title} />
            <Text>
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>
            </Text>
        </Content>

    </Wrapper>
)
export default MovieInfo;