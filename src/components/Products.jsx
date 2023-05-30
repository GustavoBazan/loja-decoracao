import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Products.css";

import { useState, useEffect } from "react";
const url = "http://localhost:3000/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);
  let productList=[];
  products.forEach((product)=>{
    productList.push(
        <Card style={{ width: "18rem" }} key={product.id}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            R$ {product.price}
          </Card.Text>
          <Button variant="success">Comprar</Button>
        </Card.Body>
      </Card>
    )
  })
  return (
    <div className="products">
        { productList }
    </div>
  );
}

export default Products;
