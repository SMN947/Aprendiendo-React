import React, { useEffect } from 'react'
import './Alert.css'

export const Alert = (props) => {

    useEffect(() => {
        //Al montar el componente
        console.log(`Alerta iniciada: ${props.pais}`)

        //Al desmontar el componente
        console.log(`Desmontado el componente ${props.pais}`)
    })


    return (
        <div className='alert'>Alert</div>
    )
}
