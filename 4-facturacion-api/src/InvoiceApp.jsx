import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { InvoiceClient } from "./components/InvoiceClient";
import { InvoiceCompany } from "./components/InvoiceCompany";
import { InvoiceDetail } from "./components/invoiceDetail";
import { InvoiceItems } from "./components/InvoiceItems";
import { InvoiceTotal } from "./components/InvoiceTotal";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial={
    id:0,
    name: '',
    client:{
        name:'',
        lastName:'',
        address:{
            country:'',
            city:'',
            street:'',
            number:0
        }
    },
    company:{
        name:'',
        fiscalNumber:0,
    },
    items:[ ]

}


export const InvoiceApp=()=>{
 
const [activeForm, setActiveForm]=useState(false);

const [total, setTotal]= useState(0);

const [counter, setCounter]= useState(4);

const [invoice, setInvoice]= useState(invoiceInitial);

const [items, setItems]= useState([]);


//Lo empieza a obtener desde el service y en el service lo obtiene de data
const { id, name, client, company}= invoice;


//esto hace que se ejecute una sola vez, solo la primera vez
useEffect(()=>{
  const data= getInvoice();
  console.log(invoice);
  setInvoice(data);
  setItems(data.items);
}, []);


useEffect(()=>{
  console.log('items cambio')
  setTotal(calculateTotal(items));
},[items]);//items representa un nuevo item cada vez que hago clic en agregar



const handlerAddItems= ({product,price,quantity}) => {
 
  setItems([...items, 
  {
      id: counter, 
      product: product.trim(), 
      price: parseInt(price.trim(), 10), 
      quantity: parseInt(quantity.trim(),10)
  }
]);

  setCounter(counter+1);
}


//es para eliminar items
const handlerDeleteItems=(id)=>{
   setItems(items.filter(item=>item.id!==id))
}

const onActiveForm=()=>{

  setActiveForm(!activeForm)

}

  return(
   <>
   
<div className="Container">
<div className="card my-3">
    <div className="card-header">
      Ejemplo factura
    </div>
   <div className="card-body">
    <InvoiceDetail id={id} name={name}/>
    <div className="row my-3">
     <div className="col">
         <InvoiceClient title='Datos del cliente' client={client} />
      </div>  
      <div className="col">     
        <InvoiceCompany title='Datos de la empresa ' company={company} /> 
      </div>
   </div>
      <InvoiceItems  title='Productos de la factura' items={items} handlerDeleteItems={id=>handlerDeleteItems(id)}/>
      <InvoiceTotal total={total}/>
      <button className="btn btn-secondary" onClick={onActiveForm}>{!activeForm?'Agregar Item':'Ocultar Item'}</button>
      {!activeForm ||<FormItemsView handler={handlerAddItems}/> } 
   </div>
 </div>
</div>
</>
  )
}