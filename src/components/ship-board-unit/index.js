
import React, { PureComponent } from 'react';
import Cruiser from '../../assets/Cruiser Shape.png';
import Carrier from '../../assets/Carrier Shape.png';
import Aircraft from '../../assets/Aircraft Shape.png';
import Battleship from '../../assets/Battleship Shape.png';
import Submarine from '../../assets/Submarine Shape.png';
import Hit from '../../assets/Hit small.png';
import Miss from '../../assets/Miss small.png';
import './style.css';

export default class ShipBoardUnit extends PureComponent {
    render() {
        let img;
        switch (this.props.type) {
            case 'carrier':
                img = Carrier;
                break;
            case 'battleship':
                img = Battleship;
                break;
            case 'cruiser':
                img = Cruiser;
                break;
            case 'submarine':
                img = Submarine;
                break;
            case 'destroyer':
                img = Aircraft;
                break;
            default:
                img = Carrier;
                break;
        }
        return (
            <div className="ship-board-unit">
                <img src={img} alt=""/>
            </div>
        );
    }
}
