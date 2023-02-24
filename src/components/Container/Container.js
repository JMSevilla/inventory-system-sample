import React from 'react'
import { Container } from '@mui/material'


const ControlledContainer = (props) => {
    const { children, style } = props
    return (
        <>
        <Container style={style}>
            {children}
        </Container>
        </>
    )
}

export default ControlledContainer