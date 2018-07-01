import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/hello'
import Progress from './component/progress'
import {Icon, Layout, Menu, List, Avatar} from 'antd'
import TodoList from "./component/TodoList"
import Props from "./component/properties"
const {Header, Content, Footer} = Layout;
const logoStyle={
  width:'180px',
  height: '32px',
  fontSize: '32px',
  float: 'left',
  color: 'white',
  fontFamily: 'Monico',

};
class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{position:'fixed', width:'100%'}}>
          <div className="logo">
            <label style={logoStyle}>Todo List</label>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{lineHeight:'64px'}}>
            <Menu.Item key="1">Todo</Menu.Item>
            <Menu.Item key="2">Done</Menu.Item>
            <Menu.Item key="3">All</Menu.Item>
          </Menu>

        </Header>
        <Content style={{padding:'0 50px', marginTop: '64px', marginBottom: '64px'}}>
          <TodoList class="list">
          </TodoList>
        </Content>
        <Footer style={{textAlign:'center', width: '100%', position: 'fixed', bottom: '0'}}>
          Star ©2018 Created by XiaoHaoxing
        </Footer>
      </Layout>
    );
  }
}

export default App;
