import React from 'react';
import logo from './assets/img/logo.png';
import './App.css';

import { Layout, Menu, Icon } from 'antd';
import { NavLink, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import SystemManage from './view/system/SystemManage';
import ParameConfig from './view/parame/ParameConfig';
import MarketingCreate from './view/marketing/MarketingCreate';
import MarketingManage from './view/marketing/MarketingManage';
import MarketingEdit from "./view/marketing/MarketingEdit";
import Statistics from './view/statistics/Statistics';
import history from './history';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
	state = {
		collapsed: false,
		systemManage: false,
		parameConfig: false,
		create: false,
		manage: false,
		statistics: false,
	};
	hisListen = null;
	onCollapse = collapsed => {
		this.setState({ collapsed });
	};
	componentDidMount() {
		const that = this;
		const pathname = history.location.pathname.split('/');
		const road = pathname[pathname.length - 1];
		this.setState(() => {
			return {
				systemManage: false,
				parameConfig: false,
				create: false,
				manage: false,
				statistics: false,
				[road]: true
			}
		})
		this.hisListen = history.listen((location) => {
			const pathname = location.pathname.split('/');
			const road = pathname[pathname.length - 1];
			that.setState(() => {
				return {
					systemManage: false,
					parameConfig: false,
					create: false,
					manage: false,
					statistics: false,
					[road]: true
				}
			})
		})
	}
	render() {
		return (
			<HashRouter history={history}>
				<Layout style={{ minHeight: '100vh' }}>
					<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
						<div className="logo" style={{ textAlign: 'center' }}>
							<span style={{ lineHeight: '64px' }}>
								<img src={logo} alt="康期股份" style={{ width: 140 }} />
							</span>
						</div>
						<Menu theme="dark" mode="inline">
							<Menu.Item key="1" className={this.state.systemManage ? "ant-menu-item-selected" : ''}>
								<NavLink to="/systemManage" style={{ display: 'block' }}>
									<Icon type="pie-chart" />
									<span>
										用户管理
									</span>
								</NavLink>
							</Menu.Item>
							<Menu.Item key="2" className={this.state.parameConfig ? "ant-menu-item-selected" : ''}>
								<NavLink to="/parameConfig" style={{ display: 'block' }}>
									<Icon type="pie-chart" />
									<span>
										参数配置
								</span>
								</NavLink>
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
								<Menu.Item key="3" className={this.state.create ? "ant-menu-item-selected" : ''}>
									<NavLink to="/marketing/create">
										新建活动
									</NavLink>
								</Menu.Item>
								<Menu.Item key="4" className={this.state.manage ? "ant-menu-item-selected" : ''}>
									<NavLink to="/marketing/manage">
										活动管理
									</NavLink>
								</Menu.Item>
							</SubMenu>
							<Menu.Item key="5" className={this.state.statistics ? "ant-menu-item-selected" : ''}>
								<NavLink to="/statistics" style={{ display: 'block' }}>
									<Icon type="file" />
									<span>
										统计分析
								</span>
								</NavLink>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }} />
						<Content style={{ margin: '30px 16px 0' }}>
							<div style={{ padding: 24, background: '#fff', minHeight: '100%', paddingTop: 8 }}>
								<Switch>
									<Route exact={true} path="/" render={() => {
										return <Redirect to="/systemManage" />
									}} />
									{/* 系统用户管理 */}
									<Route path="/systemManage" component={SystemManage} />
									{/* 参数配置 */}
									<Route path="/parameConfig" component={ParameConfig} />
									{/* 营销活动管理 */}
									{/* 新建活动 */}
									<Route path="/marketing/create" component={MarketingCreate} />
									{/* 活动管理 */}
									<Route path="/marketing/manage" component={MarketingManage} />
									{/* 活动修改 */}
									<Route path="/marketing/edit" component={MarketingEdit} />
									{/* 统计分析 */}
									<Route path="/statistics" component={Statistics} />
								</Switch>
							</div>
						</Content>
						<Footer style={{ textAlign: 'center' }}>版权所有<sup>©</sup>上海康耐特旗计智能科技股份有限公司 保留一切权利</Footer>
					</Layout>
				</Layout>

			</HashRouter>
		);
	}
}

export default App;
