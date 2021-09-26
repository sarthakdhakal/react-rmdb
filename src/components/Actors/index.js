import React, { Component } from 'react';
import { Wrapper, Image } from './Actors.styles';
const Actors = ({ name, character, imgUrl }) => {
    return (
        <Wrapper>
            <Image src={imgUrl} alt="Actor Image" />
            <h3>{name}</h3>
            <p>{character}</p>


        </Wrapper>
    )
}
export default Actors;