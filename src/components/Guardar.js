import React, { useState } from "react";

export default function Guardar() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [salario, setSalario] = useState('')

    const Axios = require('axios').default;

    const registrar=async(e)=>{
        e.preventDefault()
        const NuevoEmpleado={nombre,apellido,salario}
        const respuesta=await Axios.post('http://localhost:4000/api',NuevoEmpleado)
        const mensaje = respuesta.data.mensaje
        alert(mensaje)
    }

    return (
        <div className="container">
            <form onSubmit={registrar}>
                <div>
                    <input type="text" className="form-control" required placeholder="Nombre" onChange={e=>setNombre(e.target.value)}/>
                </div>
                <div>
                    <input type="text" className="form-control" required placeholder="Apellido" onChange={e=>setApellido(e.target.value)}/>
                </div>
                <div>
                    <input type="text" className="form-control" required placeholder="Salario" onChange={e=>setSalario(e.target.value)}/>
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )


}