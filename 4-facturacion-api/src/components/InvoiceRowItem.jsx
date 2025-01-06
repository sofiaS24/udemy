import PropTypes from "prop-types"

export const InvoiceRowItem=({id ,product ,price ,quantity , handlerDeleteItems})=>{ 
   return(
    <>
        <tr>
            <td>{product}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button  
                 className='btn btn-danger' 
                 onClick={()=> handlerDeleteItems(id)}> eliminar </button></td>
         </tr>
    
    </>

   )
}

InvoiceRowItem.propTypes={
   product: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   quantity: PropTypes.number.isRequired,

}