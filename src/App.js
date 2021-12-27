import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ItemListNoMeLaContainer from './components/ItemListNoMeLaContainter/ItemListNoMeLaContainer';
import Navbar from './components/Navbar/Navbar';

const App = () => (
    <BrowserRouter>
      <Navbar></Navbar>
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
  );

export default App;
