import React, { useState } from "react";
import { Formulario } from "../FormularioPedidos/FormularioPedido";
import {Carrito} from "../Js/Cart";


export const agregarCarrito = () => {
    
    const [carrito, setCarrito] = useState([])

    const [total, setTotal] = useState(0)

    const agregarCarrito = (product) =>{
        setTotal(0)
        setCarrito(cart.concat(new Carrito(product)))}

useEffect(()=>{
            let aux = 0
            cart.forEach(value => {
                aux += value.product * value.quantity
            })
            setTotal(aux)
        },[cart])

    return (
      
<div id= "segundaColumna">
    <h1 className="detalleP">DETALLE PEDIDO</h1>
    <ul id="carrito">
    {
        cart.length == 0 ? 
        (
        <>
         El carrito esta vacio 
           </>
        ):
        (
     carrito.map (value => {
return (
<li>
    <p>{product.nombre}</p>
    <input value={value.quantity}/>
    <p>${value.product * value.quantity}</p>
    </li>
        )}))
    }
    </ul>
    <p>Total: $<span id="total">{total}</span></p>

<Formulario></Formulario>
</div>
    )
}