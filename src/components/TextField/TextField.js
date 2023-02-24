import React from 'react'
import { TextField, Typography } from '@mui/material'

const ControlledTextField = (props) => {
    const {
        placeholder,
        type,
        label,
        style,
        onChange,
        variant
    } = props

    return (
        <>
            <div style={style}>
            <Typography variant='h6'>{label}</Typography>
            <TextField 
            placeholder={placeholder}
            type={type}
            variant={variant}
            onChange={onChange}
            fullWidth
            />
            </div>
        </>
    )
}

export default ControlledTextField