import React from 'react'
import { Grid } from '@mui/material'

const ControlledGrid = (props) => {
    const { 
        arr,
        xs
    } = props
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                arr.length > 0 && arr.map((item) => {
                    return (
                        <Grid item xs={xs}>
                            {item.children}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default ControlledGrid