import React from 'react'
import Product from './Product'
import Catalog from './Catalog'
import products from '../product_list'
import '../css/normalize.css'
import '../css/App.css'

function App () {
    return (
        <div className="container">
            <h1>Ты сегодня покормил кота?</h1>
            <Catalog products={products}/>
        </div>
    )
}
export default App
