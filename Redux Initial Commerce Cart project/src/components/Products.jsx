import React, { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import axios from "axios"

function Products() {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/")
                const products = await response.data

                setProductsList(products)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
    return (
        <Container fluid>
            <Row>
                {productsList.map((item, id) => (
                    <Col md="3">
                        <Card style={{ width: "18rem" }} key={item.id} className="col-lg-3">
                            <Card.Img variant="top" src={item.image} style={{ width: "15rem", height: "15rem" }} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.price}</Card.Text>
                                <Card.Footer className="tw-flex tw-justify-center ">
                                    <Button variant="primary">Add to cart</Button>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products
