
import React, { PureComponent } from 'react';
import PlayerBoard from '../../components/players-board-unit';
import './style.css';

export default class PlayersBoard extends PureComponent {
    render() {
        return (
            <div className="players-board">
                <PlayerBoard title="Player 1" value="00" isFirstPlayer={true}/>
                <PlayerBoard title="Player 2" value="00"/>
            </div>
        );
    }
}

