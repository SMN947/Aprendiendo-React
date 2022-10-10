import React, { useEffect, useState } from 'react'

export const AjaxRequest = () => {

    const [usuarios, setUsuarios] = useState([])

    //Generico / Basico
    const getUsuariosEstaticos = () => {
        setUsuarios(
            [
                { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
                { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" }, { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" }, { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" }, { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
                { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
            ]
        )
    }

    //Dinamicos / Ajax
    const getUsuariosDinamicos = () => {
        fetch("https://reqres.in/api/users?page=2")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data)
                },
                error => {
                    console.log("ERROR")
                }
            )
    }
    useEffect(() => {
        // getUsuariosEstaticos()
        getUsuariosDinamicos()
    }, [])
    return (
        <div>
            <h1>AjaxRequest</h1>
            <hr />
            <ol>
                {
                    usuarios.map((usuario) => {
                        return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                    })
                }
            </ol>
        </div>
    )
}
