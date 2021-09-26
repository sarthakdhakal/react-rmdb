import React, { Component } from 'react';
import { calcTime, convertMoney } from '../../helpers';

import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ time, budget, revenue, profit }) => {
    return (
        <Wrapper>
            <Content>
                <div className="column">
                    <p>Running Time: {calcTime(time)}</p>
                </div>
                <div className="column">
                    <p>Budget: {convertMoney(budget)}</p>
                </div>
                <div className="column">
                    <p>Revenue: {convertMoney(revenue)}</p>
                </div>
                <div className="column">
                    {/* if({profit}<0) return <p>Profit: {profit}</p>
                    else return <p>Loss: {profit}</p> */}
                    {profit >= 0
                        ? <p>Profit: {convertMoney(profit)}</p> : <p>Loss: {convertMoney(profit)}</p>}
                </div>
            </Content>
        </Wrapper>
    )
}
export default MovieInfoBar;