import React, {Component} from 'react'
import '../css/Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        const {product} = this.props
        return (
            <div className="product__item">
                111
            </div>
        );
    }
}

export default Product
