import React from 'react'
import Header from './components/Header/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ItemListNoMeLaContainer from './components/ItemListNoMeLaContainter/ItemListNoMeLaContainer';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </>
  );

export default App;
