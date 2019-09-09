import React from 'react';
import logo from './assets/img/logo.png';
import './App.css';

import { Layout, Menu, Icon } from 'antd';
import { NavLink, HashRouter, Switch, Route } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
	state = {
		collapsed: false,
	};

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

	render() {
		return (
			<HashRouter>
				<Layout style={{ minHeight: '100vh' }}>
					<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
						<div className="logo" style={{ textAlign: 'center' }}>
							<span style={{ lineHeight: '64px' }}>
								<img src={logo} alt="康期股份" style={{ width: 140 }} />
							</span>
						</div>
						<Menu theme="dark"  mode="inline">
							<Menu.Item key="1">
								<Icon type="pie-chart" />
								<span>
									<NavLink to="/systemManage">
										系统用户管理
                					</NavLink>
								</span>
							</Menu.Item>
							<Menu.Item key="2">
								<Icon type="pie-chart" />
								<span>
									<NavLink to="/parameConfig">
										参数配置
                					</NavLink>
								</span>
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
								<Menu.Item key="3">
									<NavLink to="/marketing/create">
										新建活动
									</NavLink>
								</Menu.Item>
								<Menu.Item key="4">
									<NavLink to="/marketing/manage">
										活动管理
									</NavLink>
								</Menu.Item>
							</SubMenu>
							<Menu.Item key="5">
								<Icon type="file" />
								<span>
									<NavLink to="/statistics">
										统计分析
									</NavLink>
								</span>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }} />
						<Content style={{ margin: '30px 16px 0' }}>
							<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
								<Switch>
									{/* 系统用户管理 */}
									{/* <Route path="/systemManage" component={}/> */}
									{/* 参数配置 */}
									{/* <Route path="/parameConfig" component={}/> */}
									{/* 营销活动管理 */}
									{/* 新建活动 */}
									{/* <Route path="/marketing/create" component={}/> */}
									{/* 活动管理 */}
									{/* <Route path="/marketing/manage" component={}/> */}
									{/* 统计分析 */}
									{/* <Route path="/statistics" component={}/> */}
								</Switch>
							</div>
						</Content>
						<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
					</Layout>
				</Layout>

			</HashRouter>
		);
	}
}

export default App;
