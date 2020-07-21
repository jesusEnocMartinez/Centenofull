import React, {Component} from 'react';
 
class MyComponent extends Component{

    render(){
     let receta = {
         name : 'pizza',
         ingredientes:['tomate ,queso,chorizo'],
         calorias : 400
     };


        return (
            <React.Fragment>
            <h1>{'Receta:'+ receta.name}</h1>
        <h2>{'Calorias:'+ receta.calorias}</h2>
        <ol>
            {
                receta.ingredientes.map((ingrediente,i) => {
                console.log(ingrediente);
                return (
                    <li  key={i}>
                        {ingrediente}
                    </li>
                );
                    

                })
            }
        </ol>
            </React.Fragment>
        );
    }

}

export default MyComponent;