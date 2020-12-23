import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        let receta = {
            nombre : 'pizza',
            ingredientes : ['Tomate', 'Queso', 'Jamon cocido'],
            calorias : 400
        }

        return (
            <React.Fragment>
                <h1>Hola, soy el componente llamado: MiComponente</h1>
                <h2>Helow da</h2>
                <h3>{'Nombre: ' + receta.nombre}</h3>
                <h3>{'Calorias: ' + receta.calorias}</h3>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return  (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
            </React.Fragment>
        )
    }
}

export default MiComponente;