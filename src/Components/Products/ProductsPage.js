import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {createMuiTheme} from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core'
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import {CartPlus} from 'react-bootstrap-icons';
import ProductCard from './ProductCard'


const theme = createMuiTheme();


function ProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
        .then(res =>
            {
                console.log(res.data);
                setProducts(res.data)
            }
        )
        .catch(err => console.log(err))
    }, [])

    const container= { maxWidth: '80%', margin:'auto'}

  return (
    <>
      {/* products cards */}
    <Grid
    // style= {{ backgroundColor: 'red'} }
    style= { container }
    container
    direction="row"
    justify="flex-start" 
    alignItems="center"
    >
      {
        products.map((product) => {
          // make product card here
          return(
            <Grid key={product.id} item container justify="center"  lg={4}>
              <Grid item style= {{ marginTop: theme.spacing(4)} }>
            <ProductCard product={product}/>
            </Grid>
            </Grid>
            )
        })
      }
    </Grid>
    </>
  )
}

export default ProductsPage
