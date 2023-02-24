import React from 'react'
import { Home } from '../pages/index'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { RouterHelper } from './route'


// Dynamic Routing Management 

const RouteWithLoad = ({component : Component, ...rest}) => { //reusable function
    return (
            <Route 
            {...rest}
            render={(props) => (
                <>
                    <Component {...props} />
                </>
            )}
            />
    )
}



// arrow function

export default () => (
    <BrowserRouter>
        <Switch>
        <RouteWithLoad exact path={RouterHelper.Home.path} component={Home} />
    </Switch>
    </BrowserRouter>
)
/*
Javascript > any 

Typescript > undefined variable or props

*/