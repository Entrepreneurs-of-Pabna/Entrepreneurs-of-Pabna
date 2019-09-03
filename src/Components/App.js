import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import { NotFound, Block } from './pages/parts';

import About from './pages/About';
import Gallery from './pages/Gallery/Gallery';
import PhotoView from './pages/Gallery/PhotoView'
import { Member, Members } from './pages/member/members';


import './app.css';


const App = () => {
  return(
    <section>
      <Header />
      <Block height= "50px" />
      <div className="container">
        <Switch>
          <Route path = "/about" component = { About } />
          <Route path = "/photo/id=:id" component = { PhotoView } />
          <Route path = "/gallery" component = { Gallery }/>
          <Route path = "/member/id=:id" component = { Member } />
          <Route path = "/website" component = { Members } exact />
          <Route path = "/members" component = { Members } exact />
          <Route path = "/" component = { Members } exact />
          <Route component = { NotFound } />
        </Switch>
      </div>
      <Block height= "50px" />
      <Footer />
    </section>
  )
}

export default App