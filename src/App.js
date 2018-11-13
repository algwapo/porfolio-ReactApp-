import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import { Layout, Menu} from 'antd';

const { Header, Content } = Layout;


class App extends Component {

  render() {
    return (
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:'#ffffff' }}>
        <div className="logo"/>
        <Menu
          className="Mainheader"
          theme="light"
          mode="horizontal"
          style={{ lineHeight: '64px' , position:'fixed'}}
        >
          <Menu.Item key="5"><Link to="/projects">Projects</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/contact">Contact</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/aboutme">About Me</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/resume">Resume</Link></Menu.Item>
          <Menu.Item key="1"><Link to="/">Homepage</Link></Menu.Item>

          
        </Menu>
      </Header>
      <Layout style={{paddingTop:'25px'}}>
      <Content className="contentbody">
        
      <div className="contents" style={{height:'auto'}}>
          <Main />
      </div>
           

      </Content>
      </Layout>
    </Layout>

    );
  }
}

export default App;
