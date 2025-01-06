export const InvoiceTotal =({total})=>{

  return(
    <>
      <div className="text-end">
          <span className="badge bg-success">{total}</span>
      </div>
    </>

  )

}


//text-end es bootstrap y significa final a la derecha