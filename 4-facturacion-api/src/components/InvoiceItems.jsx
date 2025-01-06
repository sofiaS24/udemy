import PropTypes from "prop-types"
import { InvoiceRowItem } from "./InvoiceRowItem"

export const InvoiceItems=({title, items, handlerDeleteItems})=>{

   return(

    <>
      <h4>{title}</h4>
       <table className="table table-striped table-hover">
          <thead>
           <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
         <tbody>
          {items.map(({id, product, price, quantity})=>(
           <InvoiceRowItem 
               key={id}
               id={id}
               product={product} 
               price={price} 
               quantity={quantity}
               handlerDeleteItems={handlerDeleteItems}
               /> 
          ))}       
         </tbody>
      </table>
   </>
   )
}

//el id se usa para renderizar cada elemento de forma independiente

InvoiceItems.propTypes={
  title:PropTypes.string.isRequired,
  items:PropTypes.array.isRequired,
}