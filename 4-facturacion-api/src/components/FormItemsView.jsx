import { useEffect, useState } from "react";

export const FormItemsView=({handler})=>{

//define name con otro valor porque sino coincide con el de arriba y da error
//Esto lo hago para desestructurar la informacion de la factura para que sea mas legible
   const [formItemsState, setFormItemsState]= useState({
    product:'',
    price:'',
    quantity:'',
  })
  
  const {product, price, quantity}= formItemsState;

  useEffect(()=>{
    //console.log('El precio cambio')
  },[price]); //si el const donde esta definido el price esta abajo no lo reconoce
  
  useEffect(()=>{
    //console.log('El form cambio')
  },[formItemsState]);

  const onInputChange=({target: {name, value}}) =>{
    //console.log(value);
    //console.log(name);

    setFormItemsState({
      ...formItemsState,
      [name]: value
    });

  }

  const onInvoiceItemsSubmit= (event) => {
    event.preventDefault();
  
    if(product.trim().length<=1) return; //mayor o igual a un caracter
    if(price.trim().length<=1) return; //mayor o igual a un caracter
    if(isNaN(price.trim())) return;
    if(quantity.trim().length<1) return; //mayor  a un caracter
    if(isNaN(quantity.trim())) {
      alert('Error la cantidad no es un numero')
      return;
    }
    
    handler(formItemsState);

    setFormItemsState({
        product:'',
        price:'',
        quantity:'',
      });
  }

   return (<>
    <form className="w-20" onSubmit={onInvoiceItemsSubmit}>
    <input 
        type='text' 
        name="product" 
        value={product}
        placeholder="Producto" 
        className="form-control m-3"
        onChange={onInputChange}/>
     <input 
        type='text' 
        name="price" 
        value={price}
        placeholder="Precio" 
        className="form-control m-3"
        onChange={ event =>
          onInputChange(event)
        }/>
      <input 
        type='text' 
        name="quantity" 
        value={quantity}
        placeholder="Cantitdad " 
        className="form-control m-3"
        onChange={onInputChange}/> 
      <button 
          type="submit" className="btn btn-primary m-3"> 
          Nuevo Item
      </button>   
  </form>
</>)


}
