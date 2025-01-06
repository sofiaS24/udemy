import { invoice } from "../data/invoice"

//Aca iria la llamada a api con spring pero de momento lo estamos hardcodeando
export const getInvoice= () =>{

    /*let total = 0;
    invoice.items.forEach(item =>{
       total= total + item.price * item.quantity;

    });*/

    const total=calculateTotal(invoice.items)
        
    return {...invoice, total};

    //...invoice crea un objeto nuevo que se puede modiifcar, una copia de original
    //currentValue hace referencia la precio por cantidad
  
}

export const calculateTotal=(items=[])=>{
   return items
   .map( item=> item.price * item.quantity)
   .reduce((accumulator, currentValue)=> accumulator + currentValue, 0);


}