import PropTypes from "prop-types"


export const InvoiceClient=({title, client})=>{

    const {
        name:nameClient, 
        lastName, 
        address: {   //desestructuracion anidada es address
            country, 
            city, 
            street, 
            number }
        }=client;

    return (
      
        <>
           <h3>{title}</h3>
           <ul className="list-group">
              <li className="list-group-item active">{ nameClient} { lastName }</li>
              <li className="list-group-item">{ country }</li>
              <li className="list-group-item">{ city}</li>
              <li className="list-group-item">{ street} {number}</li>
           </ul>    
        </>
  
     )


}

InvoiceClient.propTypes={
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
}