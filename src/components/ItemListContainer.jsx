import React, {useState, useEffect} from "react";
import productos from "./productos"
import { customFetch } from "./customFetch";
import ItemList from "./ItemList";




const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState ([])

  useEffect(() => {
   customFetch(productos)
   .then(data => setListaProductos(data))
  },[])

    return (
      <div><ItemList listaProductos={listaProductos}/></div>
    )
  }

export default ItemListContainer;