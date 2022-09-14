import React from "react";
import Item from './Item';


const ItemList = ({listaProductos}) => {
    console.log(listaProductos)
    return (
        <>
        <div className="itemList">
            {listaProductos.map((producto) => (
                <Item producto={producto} key={producto.id}/>
                
            ))

            }
            
            </div>
        </>
    )
}

export default ItemList;
