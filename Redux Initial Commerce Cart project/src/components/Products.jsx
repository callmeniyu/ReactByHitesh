import React, { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import axios from 'axios'

function Products() {

    const [productsList,setProductsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/")
                const products = await response.data;
                setProductsList(products)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])
    return (
        <>
            {productsList.map((item) => {
                <Card style={{ width: "18rem" }} key={item.id}>
                <h1>hello</h1>

                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{ item.price}</Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
            })}
            
        </>
    )
}

export default Products
