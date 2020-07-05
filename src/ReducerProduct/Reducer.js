const Reducer = (state, action) => {
    switch(action.type){
        case "update_product":
            console.log("add to cart", action.productId)
            return state = [...state, action.productId];
        default:
            return state
    }
}

export default Reducer