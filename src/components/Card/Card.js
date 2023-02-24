import React from 'react'
import { Card, CardContent } from '@mui/material'

const ControlledCard = (props) => {
    const { children } = props
    return (
        <Card>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default ControlledCard