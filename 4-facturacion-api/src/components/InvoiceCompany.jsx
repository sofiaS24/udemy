import PropTypes from "prop-types"

export const InvoiceCompany=({title, company})=>{
    return (
      
        <>
        <h3>{title}</h3>
        <ul className="list-group">
          <li className="list-group-item active">{ company.name}</li>
          <li className="list-group-item">{ company.fiscalNumber }</li>
        </ul> 
        </>

    )

}



InvoiceCompany.propTypes={
   title:PropTypes.string.isRequired,
   company:PropTypes.object.isRequired,
}