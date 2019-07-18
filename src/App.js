import React from 'react';
import { Route, Router } from 'react-router-dom';
import {Layout} from 'antd';
import Header from './components/header';
import Home from './components/home';
import Plinko from './components/plinko';
import Baccarat from './components/baccarat';
import history from './history';
import 'antd/dist/antd.css';
import './App.css';


const { Content,Footer} = Layout;


function App() {
  return (
    <div className="app-root">
       <Layout className="layout">
       <Router history={history}>
        <Header/>
        <Content>
        <Route exact path="/" render={() => <Home/>}/>
        <Route exact path="/plinko" render={() => <Plinko/>}/>
        <Route exact path="/baccarat" render={() => <Baccarat/>}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>BetProtocol Games ©2019</Footer>
        </Router>
        </Layout>
    </div>
  );
}

export default App;
