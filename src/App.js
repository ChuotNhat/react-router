import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Route } from "react-router-dom";
import NewArticle from './components/NewArticle';
import Setting from './components/Setting';
import AboutYou from './components/AboutYou';
const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/newarticle" component={NewArticle} />
      <Route path="/setting" component={Setting} />
      <Route path="/ten" component={AboutYou} />
    </div>
  </BrowserRouter>
);
export default App;