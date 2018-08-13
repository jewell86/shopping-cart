import React from 'react'

const CartFooter = (props) => (
    <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">&copy; { props.copyright }</a>
    </nav>
)

export default CartFooter