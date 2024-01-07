import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './product.css'
import React, { Component } from 'react'


export class Product extends Component {
    render(){
        return(
            <div className='product'>
            <h1 className='h1'>For our product range, please contact us through our <Link to="./contactus">Contact Us</Link> Page</h1>
            </div>
        )
    }
}

export default Product