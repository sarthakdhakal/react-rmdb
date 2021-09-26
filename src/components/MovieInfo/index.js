import React, { Component } from 'react';
import Thumb from '../Thumb';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpg';
import { Wrapper, Image, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ image, movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Image
                src={image}

                alt={movie.title} />
            <Text>
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>
                <div className="rating-directors">

                    <div >
                        <h3>Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div >
                        <h3>Release Date</h3>
                        <div className="releaseDate">{movie.release_date}</div>
                    </div>
                    <div>
                        <div className="director">
                            <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                    {/* <div>
                        <div className="actors">
                            <h3>Main Actor{movie.actors.length > 1 ? 's' : ''}</h3>
                            {movie.actors.map((actor, i) => {
                                if (i >= 10) return
                                return <p key={actor.credit_id}>{actor.name}</p>
                            })}

                            {/* {for(let i = 0; i <4; i++) {
                                <p key={actor.credit_id}>{actor.name}</p>
                            }} */}

                    {/* </div> */}
                    {/* </div> */}
                </div>
            </Text>
        </Content >

    </Wrapper >
)
export default MovieInfo;