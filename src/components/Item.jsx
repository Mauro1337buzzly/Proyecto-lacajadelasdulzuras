import React from "react";



const Item = ({ producto }) => {
  console.log(producto.nombre);

  return (
    <>
    <div className="">
    <h1>{producto.nombre}</h1>
    <h3>{producto.precio}</h3>
    <p>{producto.detail}</p>
    <img src={producto.img} alt="torta" width={400}/>
    </div>
   
    </>
  );
};

export default Item;
