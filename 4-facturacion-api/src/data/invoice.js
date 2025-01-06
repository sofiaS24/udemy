export const invoice={
    
    id:1,
    name: 'Componentes PC',
    client:{
        name:'Soledad',
        lastName:'Gomez',
        address:{
            country:'USA',
            city:'Los Angeles',
            street:'Sunset Boulevard',
            number:47
        }
    },
    company:{
        name:'BTech',
        fiscalNumber:1234567,
    },
    items:[
        { 
          id:1,
          product:'Cpu intel i7',
          price:1000,
          quantity:1,
        },
        {
          id:2,
          product:'Logitech Mouse',
          price:50,
          quantity:2,
        } ,       
        {
          id:3,
          product:'Monitor Asus',
          price:350,
          quantity:1,
        },
    ]

}