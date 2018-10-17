import React from 'react'
import Product from './Product'
import '../css/Catalog.css'

function Catalog (props) {
    const {products} = props
    const elements = products.map(
        element => <Product product={element} key={element.id}/>
    )
    return (
        <section className="product">
            {elements}
        </section>
    )
}
export default Catalog