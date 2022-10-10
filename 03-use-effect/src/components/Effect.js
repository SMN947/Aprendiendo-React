import React, { useState, useEffect } from 'react'
import { Alert } from './Alert'

export const Effect = () => {
    const [User, setUser] = useState("Simon")
    const [Pais, setPais] = useState("colombia")
    const modUser = (user) => {
        setUser(user)
    }
    const modCountry = (user) => {
        setPais(user)
    }
    useEffect(() => {
        console.log("Se ha cargado el componente")
    }, [])
    useEffect(() => {
        console.log("Se ha cambiado el user")
        document.title = `Welcome ${User} from ${Pais}`;
    }, [User])
    useEffect(() => {
        console.log("Se ha cambiado el user")
        document.title = `Welcome ${User} from ${Pais}`;
    }, [Pais])
    return (
        <div>

            <h1>Effect</h1>
            <strong>{User}</strong>
            <br />
            <input onChange={e => modUser(e.target.value)} />
            <br />
            <input onChange={e => modCountry(e.target.value)} />
            {User == "test" && <Alert pais={Pais} />}
        </div>
    )
}
