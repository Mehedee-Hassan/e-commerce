import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} />
        </a>

        <Card.Body>
            <a href={'/product/${product._id}'}>
                <Card.Title as="dic">
                    <b>{product.name}</b>
                </Card.Title>
            </a>
            <Card.Text as="div">
                <div className='my-3'>
                    <Rating value={product.rating} text={`${product.numbReviews} reviews`} color={'#f8e825'}/>
                </div>
            </Card.Text>
        </Card.Body>        
    </Card>
  )
}

export default Product
