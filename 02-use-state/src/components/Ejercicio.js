import React, { useState } from 'react'
import PropTypes from "prop-types"

export const Ejercicio = (props) => {
    const [year, setYear] = useState(props.year)
    const changeYear = (e, year) => {
        setYear(year)
    }
    return (
        <div>
            <h1>Ejercicio</h1>
            <p>{year}</p>
            <input type="text" onKeyUp={e => changeYear(e, e.target.value)} />
        </div>
    )
}

Ejercicio.propTypes = {
    year: PropTypes.number.isRequired
}
