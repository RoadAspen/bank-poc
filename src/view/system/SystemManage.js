/**
 * 系统用户管理
 */

import React from 'react';
import { Tabs, Table, Row, Col, Input, Select, Button, Modal, Form, message } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

class SystemManage extends React.Component {
    state = {
        visible: false,
        operation: '',
        editData: {
            name: '',
            sex: '',
            role: '',
            jurisdiction: '',
            email: ''
        },
        changeName: '',
        changeRole: '',
        changeEmail: ''
    };

    render() {
        var that = this
        const peopledataSource = [
            {
                key: 0,
                name: '系统管理员',
                sex: '男',
                role: '系统管理员',
                jurisdiction: ['用户管理', '参数配置', '营销活动管理', '统计分析'],
                email: 'admin@kq300061.com'
            },
            {
                key: 1,
                name: '王占朋',
                sex: '男',
                role: '用户管理员',
                jurisdiction: ['用户管理'],
                email: 'zhanpeng.wang@kq300061.com'
            },
            {
                key: 2,
                name: '孔甲',
                sex: '女',
                role: '活动管理员',
                jurisdiction: ['参数配置', '营销活动管理', '统计分析'],
                email: 'jia.kong@kq300061.com'
            }
        ];
        const peoplecolumns = [
            {
                title: '用户名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            },
            {
                title: '角色',
                dataIndex: 'role',
                key: 'role',
            },
            {
                title: '权限',
                dataIndex: 'jurisdiction',
                key: 'jurisdiction',
                render(text,record,index){
                    return (
                        <span>
                            {
                                record.jurisdiction.join('、')
                            }
                        </span>
                    )
                }
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: '操作',
                dataIndex: 'deal',
                key: 'deal',
                render: (text, item) => {
                    //注意 this 为 render 方法内部的this
                    return <><Button type="primary" size="small" onClick={() => { return that.handleUpdate(item) }} style={{ marginRight: 10 }}>更新</Button>
                        <Button type="danger" size="small" onClick={() => { return that.handleDelete(item) }}>删除</Button>
                    </>
                }
            }
        ];
        return (
            <>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="用户管理" key="1">
                        <Row>
                            <Col span={24}>
                                <span style={{ marginRight: 10 }}>用户名</span>
                                <Input placeholder="输入用户名" value={this.state.changeName} onChange={this.changeNameInfo} style={{ width: 200, marginRight: 10 }} />
                                <span style={{ marginRight: 10 }}>角色</span>
                                <Select allowClear={true} value={this.state.changeRole} onChange={this.changeRoleInfo.bind(this, 'role')} style={{ width: 200, marginRight: 10 }}>
                                    <Option value="系统管理员">系统管理员</Option>
                                    <Option value="用户管理员">用户管理员</Option>
                                    <Option value="活动管理员">活动管理员</Option>
                                </Select>
                                <span style={{ marginRight: 10 }}>邮箱</span>
                                <Input placeholder="输入邮箱账号" value={this.state.changeEmail} onChange={this.changeEmailInfo} style={{ width: 200, marginRight: 10 }} />
                                <Button type="primary" onClick={this.SelectInfo}>检索</Button>
                                <Button type="primary" style={{ marginLeft: 10 }} onClick={this.addUser}>新增</Button>
                            </Col>
                        </Row>
                        <Table dataSource={peopledataSource} columns={peoplecolumns} style={{ marginTop: 10 }} bordered={true} />
                    </TabPane>
                </Tabs>
                <div>
                    <Modal
                        title={this.state.operation}
                        visible={this.state.visible}
                        onOk={this.hideModal}
                        onCancel={this.hideModal}
                        okText="确认"
                        cancelText="取消"
                    >
                        <Form {...formItemLayout}>
                            <Form.Item {...formItemLayout} label="用户姓名">
                                <Input placeholder="请输入用户姓名" value={this.state.editData.name} />
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="性别">
                                <Select placeholder='请选择性别' value={this.state.editData.sex}>
                                    <Option value="男">男</Option>
                                    <Option value="女">女</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="角色">
                                {/* <Input placeholder="请输入角色" value={this.state.editData.role} /> */}
                                <Select placeholder='请选择角色' value={this.state.editData.role}>
                                    <Option value="系统管理员">系统管理员</Option>
                                    <Option value="用户管理员">用户管理员</Option>
                                    <Option value="活动管理员">活动管理员</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="权限">
                                <Input placeholder="请输入权限" value={this.state.editData.jurisdiction} />
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="邮箱">
                                <Input placeholder="请输入邮箱账户" value={this.state.editData.email} />
                            </Form.Item>
                        </Form>
                    </Modal>
                    {/* <WrappedDynamicRule /> */}
                </div>
            </>
        )
    }
    changeNameInfo = (e) => {
        // console.log(item)
        // console.log(e.target.value)
        // for(let StateItem in this.state.searchInfo){
        //     console.log(item)
        //     console.log(StateItem)
        //     if(item === StateItem){
        //         console.log(StateItem)
        //         let data = Object.assign({}, this.state.datavalue, {
        //             [StateItem]: e.target.value
        //         })
        //         this.setState({
        //             searchInfo: data
        //         }, function(){
        //             console.log(this.state.searchInfo)
        //         })
        //     }
        // }
        // let data = Object.assign({}, this.state.datavalue, {
        //     name: e.target.value
        // })
        this.setState({
            changeName: e.target.value
        }, function () {
            console.log(this.state)
        })
    }
    changeEmailInfo = (e) => {
        this.setState({
            changeEmail: e.target.value
        })
    }
    changeRoleInfo = (item, e) => {
        // console.log(item)
        // console.log(e)
        // let data = Object.assign({}, this.state.datavalue, {
        //     sex: e
        // })
        // this.setState({
        //     searchInfo: Object.assign({}, this.state.searchInfo, {
        //         sex: e
        //     })
        // }, function() {
        //     console.log(this.state.searchInfo)
        // })
        this.setState({
            changeRole: e
        })
    }
    SelectInfo = () => {
        console.log(this.searchInfo)
    }
    addUser = () => {
        this.setState({
            visible: true,
            operation: '新增',
            editData: {}
        });
    }
    handleUpdate = (item) => {
        let id = item;
        console.log(id)
        this.setState({
            visible: true,
            operation: '更新',
            editData: item
        });
    }
    hideModal = () => {
        this.setState({
            visible: false,
        });
    }
    handleDelete = (item) => {
        console.log(item)
        Modal.confirm({
            title: '确认',
            content: '您确认要删除此条数据吗？',
            onOk: () => {
                message.success('删除成功');
                // this.request();
            }
        })
    }

}

const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(SystemManage);

export default WrappedDynamicRule;