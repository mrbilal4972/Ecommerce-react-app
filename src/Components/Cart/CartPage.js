import React, {useContext, useState, useEffect} from 'react';
import CartHeading from './CartHeading';
import {productContext} from '../../App';
import CartItems from './CartItems';

function CartPage() {

    const {productAdded} = useContext(productContext);
    // const [item, setItem] = useState([]);
    // useEffect(() => {
    //     setItem
    // },[item])
    console.log(productAdded);

  return (
    <>
    <CartHeading />
    <CartItems />
{/* {

    productAdded.map((cartItem) =>
        <>
        <div>{cartItem.id}------{cartItem.title}</div>
        <div>{cartItem.detail}</div>
        </>
    )  
} */}

    </>
)
}
export default CartPage