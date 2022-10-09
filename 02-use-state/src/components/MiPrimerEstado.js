import React, { useState } from 'react'

export const MiPrimerEstado = () => {

    const [nombre, setNombre] = useState("Simon Bolivar")
    const cambiarnombre = () => {
        setNombre("Francisco")
    }
    return (
        <div>
            <h3>Mi Primer Estado</h3>
            <strong>{nombre}</strong>
            <br />
            <button onClick={cambiarnombre}>Cambiar</button>
        </div>
    )
}
