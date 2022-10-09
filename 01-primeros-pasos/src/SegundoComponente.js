import React from 'react'

export const SegundoComponente = () => {

    // let libros = []
    let libros = ["libro 1", "libro 2", "Libro 3"]
    return (
        <>
            <h1>
                Listado de libros
            </h1>
            {
                libros.length >= 1 ? (
                    <ul>
                        {
                            libros.map((libro, i) => {
                                return <li key={i}>{libro}</li>
                            })
                        }
                    </ul>) : <p>No hay libros</p>
            }
        </>
    )
}
