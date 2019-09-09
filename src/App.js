import React from 'react';
import logo from './assets/img/logo.png';
import './App.css';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{textAlign:'center'}}>
            <span style={{lineHeight:'64px'}}>  
                <img src={logo} alt="康期股份" style={{width:140}}/> 
            </span>  
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>系统用户管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="pie-chart" />
              <span>参数配置</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>营销活动管理</span>
                </span>
              }
            >
              <Menu.Item key="3">新建活动</Menu.Item>
              <Menu.Item key="4">活动管理</Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Icon type="file" />
              <span>统计分析</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '30px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
