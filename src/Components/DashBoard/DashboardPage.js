import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Form, Row, Col, Button} from  'react-bootstrap'

// import ProductPrize from './ProductPrize';
// import PtoductTitle from './PtoductTitle';


function DashboardPage() {

    const initialInputs = {
        // id: 1,
        title: '',
        detail: '',
        prize: '',
        image: ''
    }

    const [newProduct, setNewProduct] = useState(null);
    const [inputs, setinputs] = useState(initialInputs);

    useEffect(() => {
      if(newProduct){
        console.log(newProduct)

        axios.post('http://localhost:3000/products',{...newProduct})
        .then(res => console.log(res))
        .catch(err => console.log(err))
  

    }},[newProduct])

    const inputHandler = (e) => {
      console.log(inputs)
        setinputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
      e.preventDefault();
      setNewProduct(
            inputs
        );
        setinputs({...initialInputs});
        // console.log(newProduct)
    }

  return (
    
    <>
      <Container className='mt-4'>
        <Form onSubmit = {submitHandler}> 
          <Row>
            <Col>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Product Title</Form.Label>
                <Form.Control onChange={inputHandler} type="text" required placeholder="Product Title" value={inputs.title} name={"title"} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Product Prize</Form.Label>
                <Form.Control onChange={inputHandler} type="number" required placeholder="Product Prize" value={inputs.prize} name={"prize"} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* <Col xs={4}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Product Count</Form.Label>
                <Form.Control onChange={inputHandler} type="text" readOnly placeholder="Product ID" value={inputs.id} name={"id"} />
              </Form.Group>
            </Col> */}
            <Col xs={8}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Image</Form.Label>
                {/* <Form.Control as="textarea" rows="1" onChange={inputHandler} required placeholder="Image URL" value={inputs.image} name={"image"} /> */}
                <Form.Control onChange={inputHandler} type="text" required placeholder="Image URL" value={inputs.image} name={"image"} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Product Detail</Form.Label>
              <Form.Control onChange={inputHandler} type="text" required placeholder="Product Detail" value={inputs.detail} name={"detail"} />
            </Form.Group>
            </Col>
          </Row>
          <Button type={'submit'} variant="outline-primary" block>Add Item</Button>
        </Form>
      </Container>
    </>
  )
}

export default DashboardPage
