
import React, { PureComponent } from 'react';
import ShipBoardUnit from '../../components/ship-board-unit';
import { connect } from 'react-redux';
import './style.css';

class ShipsBoard extends PureComponent {

    generateShips = () => {
        const { shipTypes } = this.props;
        const array = [];
        for (const key in shipTypes) {
            if (shipTypes.hasOwnProperty(key)) {
                array.push(<ShipBoardUnit
                    key={key}
                    count={shipTypes[key].count}
                    size={shipTypes[key].size}
                    type={key}
                />);
            }
        }
        return array;
    };

    render() {
        return (
            <div className="ships-board">
                {this.generateShips()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shipTypes: state.ships.shipTypes,
});

export default connect(mapStateToProps)(ShipsBoard);
