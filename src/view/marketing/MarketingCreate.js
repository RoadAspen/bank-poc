/**
 * 活动创建
 */
import React from 'react';
import { Tabs, Upload, Button, Row, Col, Icon, Select, Input, Cascader, Table, message } from 'antd';
import cityoptions from './city';
const { TabPane } = Tabs;
const { Option } = Select;

class MarketingCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: 'file',
            peopledataSource: [],
            fileList: [],
            uploading: false,
        }
    }
    peoplechange = (value) => {
        this.setState(() => {
            return {
                ...this.state,
                people: value
            }
        })
    }
    onCascaderChange = (value) => {
        console.log(value)
    }
    createActive = () => {
        message.success("活动创建成功");
    }
    render() {
        // 上传 按钮
        const { fileList } = this.state;
        const uploadprops = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                return false;
            },
            fileList,
        };

        // 活动人群表
        const peopledataSource = [
            {
                id: '1',
                name: '胡军',
                age: 32,
                address: '浙江杭州',
                sex: '男',
                behavior: '旅游',
                rank: '铂金'
            },
            {
                id: '2',
                name: '靳东',
                age: 42,
                address: '江苏南京',
                sex: '男',
                behavior: '美食',
                rank: '黄金'
            },
            {
                id: '3',
                name: '姜维',
                age: 29,
                address: '安徽芜湖',
                sex: '男',
                behavior: '电子产品',
                rank: '钻石'
            },
            {
                id: '4',
                name: '宋茜',
                age: 25,
                address: '江苏苏州',
                sex: '女',
                behavior: '旅游',
                rank: '白银'
            },
            {
                id: '5',
                name: '万向',
                age: 33,
                address: '安徽马鞍山',
                sex: '女',
                behavior: '旅游',
                rank: '黄金'
            },
            {
                id: '6',
                name: '钱小凤',
                age: 34,
                address: '浙江宁波',
                sex: '女',
                behavior: '旅游',
                rank: '铂金'
            },
            {
                id: '7',
                name: '李军',
                age: 54,
                address: '安徽安庆',
                sex: '男',
                behavior: '旅游',
                rank: '白银'
            },
        ];
        // 活动人群列表
        const peoplecolumns = [
            {
                title: '姓名',
                dataIndex: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '地区',
                dataIndex: 'address',
            },
            {
                title: '性别',
                dataIndex: 'sex',
            },
            {
                title: '行为偏好',
                dataIndex: 'behavior',
            },
            {
                title: '客户等级',
                dataIndex: 'rank',
            },
        ];
        return (
            <>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="活动目标人群" key="1">
                        <Row gutter={16} style={{ marginBottom: 30 }}>
                            <Col span={24} style={{ lineHeight: '32px' }}>
                                活动名称：
                                <Input placeholder="输入活动名称 " style={{ width: 200 }} />
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: 30 }}>
                            <Col span={24} style={{ lineHeight: '32px' }}>
                                活动目标人群来源：
                                <Select value={this.state.people} style={{ width: 200 }} onChange={this.peoplechange}>
                                    <Option value="file">从文件导入</Option>
                                    <Option value="search">根据条件筛选</Option>
                                </Select>
                            </Col>
                        </Row>
                        {
                            this.state.people === 'file' ?
                                (
                                    <Row gutter={16}>
                                        <Col span={24} style={{ lineHeight: '32px' }}>
                                            选择文件：
                                            <Upload {...uploadprops} style={{ width: 200 }}>
                                                <Button>
                                                    <Icon type="upload" /> 点击上传
                                                </Button>
                                            </Upload>
                                        </Col>
                                    </Row>
                                ) :
                                (
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            年龄：<Input placeholder="下限" type="number" style={{ width: 80 }} />
                                            ~
                                            <Input placeholder="上限" type="number" style={{ width: 80, marginRight: 5 }} />
                                            性别：<Select placeholder="性别" className="create_people_input" allowClear={true}>
                                                <Option value="男">男</Option>
                                                <Option value="女">女</Option>
                                            </Select>
                                            地区：<Cascader
                                                defaultValue=""
                                                options={cityoptions}
                                                allowClear={true}
                                                onChange={this.onCascaderChange}
                                                style={{ width: 200, marginRight: 5 }}
                                                placeholder="筛选地区"
                                            />
                                            行为偏好：<Select placeholder="行为偏好" className="create_people_input" allowClear={true}>
                                                <Option value="旅游">旅游</Option>
                                                <Option value="美食">美食</Option>
                                                <Option value="电子产品">电子产品</Option>
                                            </Select>
                                            等级：<Select placeholder="等级" className="create_people_input" allowClear={true}>
                                                <Option value="钻石">钻石</Option>
                                                <Option value="铂金">铂金</Option>
                                                <Option value="黄金">黄金</Option>
                                                <Option value="白银">白银</Option>
                                            </Select>
                                            <Button type="primary" style={{ marginLeft: 10 }}>确定</Button>
                                        </Col>
                                        <Col span={24}>
                                            <Table dataSource={peopledataSource} columns={peoplecolumns} style={{ marginTop: 10 }} bordered={true} rowKey={(record) => record.id} />
                                        </Col>
                                    </Row>
                                )
                        }

                    </TabPane>
                    <TabPane tab="素材管理" key="2">
                        <Row>
                            <Col span={24} style={{ marginTop: 50 }}>
                                添加素材：
                                        <Upload {...uploadprops} style={{ width: 200 }}>
                                    <Button>
                                        <Icon type="upload" /> 点击上传
                                                </Button>
                                </Upload>
                            </Col>
                        </Row>

                    </TabPane>
                    <TabPane tab="活动流程" key="3">
                        {/* <iframe src="http://ggeditor.com/demo/#/flow" frameborder="0" title="活动流程图" style={{width:'100%',height:600}}/> */}
                        <Row>
                            <Col style={{ textAlign: 'center' }} span={24}>
                                <img src={require('../../assets/img/create_active_flow.png')} width="100%" alt="" />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="活动设置" key="4">
                        <Row gutter={16} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                活动渠道
                            </Col>
                            <Col span={16}>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="选择活动渠道"
                                    defaultValue={[]}
                                    showSearch={true}
                                >
                                    <Option value="微信公众号">微信公众号</Option>
                                    <Option value="短信">短信</Option>
                                    <Option value="营销电话">营销电话</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                活动周期
                            </Col>
                            <Col span={16}>
                                <Select
                                    // mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="选择活动周期"
                                    showSearch={true}
                                >
                                    <Option value="按周">按周</Option>
                                    <Option value="按月">按月</Option>
                                    <Option value="按季度">按季度</Option>
                                    <Option value="事时">事时</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                活动产品
                            </Col>
                            <Col span={16}>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="选择活动产品"
                                    defaultValue={[]}
                                    showSearch={true}
                                >
                                    <Option value="1">太阳全利卡</Option>
                                    <Option value="2">太阳全飞卡</Option>
                                    <Option value="3">太阳全乐卡</Option>
                                    <Option value="4">太阳全行卡</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                活动权益
                            </Col>
                            <Col span={16}>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="选择活动权益"
                                    defaultValue={[]}
                                    showSearch={true}
                                >
                                    <Option value="爱奇艺会员卡">爱奇艺会员卡</Option>
                                    <Option value="美团优惠券">美团优惠券</Option>
                                    <Option value="消费返现">消费返现</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                营销话术
                            </Col>
                            <Col span={16}>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="选择营销话术"
                                    defaultValue={[]}
                                    showSearch={true}
                                >
                                    <Option value="营销话术一">营销话术一</Option>
                                    <Option value="营销话术二">营销话术二</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                活动效果接口
                            </Col>
                            <Col span={16}>
                                根据 表<Select placeholder="输入字段" style={{ width: 100, marginLeft: 5, marginRight: 5 }} defaultValue="">
                                    <Option value="success">success</Option>
                                    <Option value="reach">reach</Option>
                                    <Option value="list">list</Option>
                                </Select>中的
                                <Input placeholder="输入字段" style={{ width: 100, marginLeft: 5, marginRight: 5 }} defaultValue={`response`} />字段 判断，
                                成功为<Input placeholder="输入字段" style={{ width: 50, marginLeft: 5, marginRight: 5 }} defaultValue={`Y`} />，
                                不成功为<Input placeholder="输入字段" style={{ width: 50, marginLeft: 5, marginRight: 5 }} defaultValue={`N`} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 50 }}>
                            <Col span={24} style={{ textAlign: 'center' }}>
                                <Button type="primary" onClick={this.createActive}>确定创建</Button>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </>
        )
    }
}

export default MarketingCreate;