import React from 'react'
import { ControlledAppbar, ControlledContainer, ControlledCard, ControlledTextField, ControlledGrid } from '../components'
import { Typography } from '@mui/material'
const Home = () => {
    return (
        <>
            <ControlledAppbar title="Inventory System" />
            <ControlledContainer style={{marginTop: '100px'}}>
                <ControlledCard>
                   <ControlledGrid
                   xs={6}
                   arr={
                    [
                        {
                            children : (
                                <>
                                    <ControlledTextField 
                                    placeholder="Enter product name"
                                    type="text"
                                    label="Enter Product Name"
                                    style={{
                                        marginTop: '10px',
                                    }}
                                    variant="outlined"
                                    />
                                </>
                            )
                        },
                        {
                            children : (
                                <>
                                      <ControlledTextField 
                                    placeholder="Enter product price"
                                    type="number"
                                    label="Enter Product price"
                                    style={{
                                        marginTop: '10px'
                                    }}
                                    variant="outlined"
                                    />
                                </>
                            )
                        }
                    ]
                   }
                   />
                </ControlledCard>
            </ControlledContainer>
        </>
    )
}

export default Home

