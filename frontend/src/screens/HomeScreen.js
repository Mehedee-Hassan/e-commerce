import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import axios from 'axios'



function HomeScreen(){

    const [products, setProducts] = useState([])


    useEffect(()=>{


        async function fetchProduct(){
            const {data} = await axios.get('/v1/api/products/')

            setProducts(data)
        }

        fetchProduct()

    },[])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map( product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}></Product>
                    </Col>
                ))}
            </Row>
        </div>
    )

}

export default HomeScreen
