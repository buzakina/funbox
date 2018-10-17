import React, {Component} from 'react'
import '../css/Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            isSelectedOver: false,
            isOver: false,
            isDisabled: props.product.disable
        };
        this.clickItem = clickItem.bind(this)
        this.mouseOverItem = mouseOverItem.bind(this)
        this.mouseOutItem = mouseOutItem.bind(this)
    }

    render() {
        const {product} = this.props

        const extra  = (product.extra && product.extra.length > 0) ? product.extra.map(
            function (element, i) {
                var quant = (element.quant) ? <strong>{element.quant} </strong> : false;
                return (
                    <li key={element.id}>{quant}{element.text}</li>
                )
            }
        ) : false;

// comment
        let  comment = <span>Чего сидишь? Порадуй котэ, <button className='link' onClick={this.clickItem}>купи.</button></span>
        comment = (this.state.isDisabled) ? 'Печалька, '+product.subtitle+' закончился.' : comment
        comment = (this.state.isSelected) ? product.comment : comment

// className
        let className = 'product__item'
        className += (this.state.isDisabled) ? ' product__item_disabled' : ''
        if(this.state.isSelected && this.state.isSelectedOver) {
            className += (this.state.isSelected) ? ' product__item_selected-over' : ''
        }else{
            className += (this.state.isSelected) ? ' product__item_selected' : ''
            className += (this.state.isOver) ? ' product__item_hover' : ''
        }

// return
        return (
            <div className={className} >
                <div className="border" onClick={this.clickItem} onMouseOver={this.mouseOverItem} onMouseOut={this.mouseOutItem}>
                    <div className="content_wrapper">
                        <div className="content">
                            {product.pretitle &&
                                <p className="pretitle">{product.pretitle}</p>
                            }
                            {product.title &&
                                <p className="title">{product.title}</p>
                            }
                            {product.subtitle &&
                                <p className="subtitle">{product.subtitle}</p>
                            }
                            {extra &&
                                <ul className="extra">
                                    {extra}
                                </ul>
                            }
                        </div>
                        {product.weight &&
                            <div className="weight">
                                <span>{product.weight}</span>{product.unit}
                            </div>
                        }
                    </div>
                </div>
                <p className="comment">{comment}</p>
            </div>
        );
    }
}

function clickItem(){
    if(!this.state.isDisabled) {
        if(!this.state.isSelected) {
            this.setState({isSelected: true})
        }else{
            this.setState({isSelected: false})
        }
    }
}
function mouseOverItem(){
    if(!this.state.isDisabled) {
        this.setState({isOver: true})
        if (this.state.isSelected){
            this.setState({isSelectedOver: true})
        }
    }
}
function mouseOutItem(){
    if(!this.state.isDisabled) {
        this.setState({isOver: false, isSelectedOver: false})
    }
}
export default Product
