import React, {useContext} from 'react';
import {productContext} from '../../App';
import {Button} from '@material-ui/core';
// import './AddBtn.css';
// import { purple } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';

const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#005f56'
      }
    },
    typography: {
        button: {
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
})


function AddBtn({prod}) {

    const {productAdded, dispatch} = useContext(productContext)

  return (
    <>
    <ThemeProvider theme={theme}>
        <Button onClick= {() => dispatch({type: 'update_product', productId: prod})} variant="outlined" color="primary">
           <AddShoppingCartSharpIcon />
            Add To Cart
        </Button>
    </ThemeProvider>
    </>
  )
}

export default AddBtn
