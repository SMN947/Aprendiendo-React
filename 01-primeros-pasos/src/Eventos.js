import React from 'react'

export const Eventos = () => {
    const hasDadoClick = () => {
        console.log("Evento CLick")
    }
    const hasDadoClick2 = (e, nombre) => {
        console.log("Evento CLick " + nombre)
    }

    return (
        <>
            <h1>Eventos</h1>
            <button
                onClick={hasDadoClick}
                onDoubleClick={e => hasDadoClick2(e, "Nombre")}>
                Click</button>
        </>
    )
}
