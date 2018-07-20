import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    render() {
        const { desc, image, name, price, status } = this.props.details;

        return (
            <li className="menu-fish">
                <img src={ image }/>
                <h3 className="fish-name">
                    { name }
                    <span className="price">{ formatPrice(price) }</span>
                </h3>
                <p>{ desc }</p>
                <button>Add to cart +</button>
            </li>
        )
    }
}

export default Fish