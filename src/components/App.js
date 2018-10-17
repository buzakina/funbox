import React from 'react'
import Product from './Product'
import Catalog from './Catalog'
import products from '../product_list'
import '../fonts/exo2thin.otf'
import '../css/normalize.css'
import '../css/App.css'

function App () {
    return (
        <div className="layout_outer">
            <div className="layout_inner">
                <div className="container">
                    <h1>Ты сегодня покормил кота?</h1>
                    <Catalog products={products}/>
                </div>
            </div>
        </div>
    )
}
export default App
