import React from 'react'

const Products = (product) => {
    const newProd = product.product
    // console.log(newProd)
    return (
        <option className="col-md-8">{ newProd.name }</option>
    )
}
export default Products