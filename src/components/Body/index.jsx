import React from 'react'
import ItemListNoMeLaContainer from '../ItemListNoMeLaContainter/ItemListNoMeLaContainer';
import {styles} from './styles'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

const Body = () => {
    return (
       
            
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                    <ItemListNoMeLaContainer titulo="Listado general lince"/>
                    </Route>
                    <Route exact path="/section/:secId">
                    <ItemListNoMeLaContainer titulo="FILTRADO"/>
                    </Route>
                    <Route exact path="*">
                    <Redirect to="/" />
                    </Route>
                </Switch>
            </BrowserRouter> 
        
    )
}

export default Body
