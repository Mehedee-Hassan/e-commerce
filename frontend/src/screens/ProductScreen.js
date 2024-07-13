import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import products from '../products'

function ProductScreen({ match }) {
    const { id } = useParams();
    // const product = products.find((p) => p._id == id)
    // const product = products.find((p) => p._id === match.params.id)

    const [product, setProduct] = useState([])

    console.log(match)

    useEffect( () => {  


        async function fetchProduct(){
            const {data} = await axios.get(`/v1/api/products/${id}`)
            
            setProduct(data)
        }

        fetchProduct()

    }, [])

  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Row>
            <Col md={6} >
                <Image src={product.image} alt = {product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flusht'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text= {`${product.numReviews} ratings`} color={ '#f8e825' }></Rating>

                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: {product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Descriptions: {product.description}
                    </ListGroup.Item>

                </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant = 'flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ?'In Stock' : 'Out of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                                <Button className='btn-block' type='button'
                                    disabled={product.countInStock == 0 ? true:false}
                                > Add to Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                
            </Col>
        </Row>
    </div>
  ) 
}

export default ProductScreen
