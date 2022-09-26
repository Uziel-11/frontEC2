import React from 'react'
import Productos from "./Productos";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component={Productos}/>
                    <Route exact path = '/Productos' component = {Productos}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;