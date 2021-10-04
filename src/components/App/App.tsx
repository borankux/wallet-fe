import React from 'react';
import 'antd/dist/antd.dark.css'
import './App.css';
import {Layout, Menu} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import routes from "../../routers/routes";

function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <Header>
          <Menu mode={'horizontal'} defaultSelectedKeys={['second']}>
            <Menu.Item key='home'>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='debt'>
              <Link to='/debt'>Debt</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            {routes.map((r)=> (<Route key={r.path} exact={r.exact || false} path={r.path} component={r.component}/>))}
          </Switch>
        </Content>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
