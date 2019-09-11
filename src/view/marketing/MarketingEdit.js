/**
 * 活动创建
 */
import React from 'react';
import { Tabs, Upload, message, Button, Row, Col, Icon, Select, Input, Cascader, Table, Card, Modal } from 'antd';
import cityoptions from './city';
import history from '../../history';
const { TabPane } = Tabs;
const { Option } = Select;
const { Meta } = Card;
class MarketingEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: 'search',
            peopledataSource: [],
            visible: false
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
    onBack = () => {
        history.push("/marketing/manage");
    }
    createActive = () => {
        message.success("活动更新成功");
    }
    materialClick = () => {
        this.setState(() => {
            return {
                visible: true
            }
        })
    }
    handleCancel = () => {
        this.setState(() => {
            return {
                visible: false
            }
        })
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
                address: '浙江杭州',
                sex: '男',
                behavior: '旅游',
                rank: '铂金'
            },
            {
                id: '3',
                name: '姜维',
                age: 29,
                address: '浙江杭州',
                sex: '男',
                behavior: '旅游',
                rank: '铂金'
            },
            {
                id: '4',
                name: '宋茜',
                age: 25,
                address: '浙江杭州',
                sex: '女',
                behavior: '旅游',
                rank: '铂金'
            },
            {
                id: '5',
                name: '万向',
                age: 33,
                address: '浙江杭州',
                sex: '女',
                behavior: '旅游',
                rank: '铂金'
            },
            {
                id: '6',
                name: '钱小凤',
                age: 34,
                address: '浙江杭州',
                sex: '女',
                behavior: '旅游',
                rank: '铂金'
            },
            {
                id: '7',
                name: '李军',
                age: 54,
                address: '浙江杭州',
                sex: '男',
                behavior: '旅游',
                rank: '铂金'
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
                <Button type="default" onClick={this.onBack}>
                    <Icon type="left" />
                    返回
                </Button>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="活动目标人群" key="1">
                        <Row gutter={16} style={{ marginBottom: 30 }}>
                            <Col span={24} style={{ lineHeight: '32px' }}>
                                活动名称：
                                <Input placeholder="输入活动名称 " style={{ width: 200 }} defaultValue="信用卡激活" />
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
                                            年龄：<Input placeholder="下限" type="number" style={{ width: 80 }} defaultValue={20} />
                                            ~
                                            <Input placeholder="上限" type="number" style={{ width: 80, marginRight: 5 }} defaultValue={60} />
                                            性别：<Select placeholder="全部" className="create_people_input" allowClear={true}>
                                                <Option value="男">男</Option>
                                                <Option value="女">女</Option>
                                            </Select>
                                            地区：<Cascader
                                                defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                                                options={cityoptions}
                                                allowClear={true}
                                                onChange={this.onCascaderChange}
                                                style={{ width: 200, marginRight: 5 }}
                                            />
                                            行为偏好：<Select placeholder="行为偏好" defaultValue="旅游" className="create_people_input" allowClear={true}>
                                                <Option value="旅游">旅游</Option>
                                                <Option value="美食">美食</Option>
                                                <Option value="电子产品">电子产品</Option>
                                            </Select>
                                            等级：<Select placeholder="等级" defaultValue="铂金" className="create_people_input" allowClear={true}>
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
                            <Col span={24}>
                                <Card title="已有素材" style={{ width: '100%' }}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={require('../../assets/img/sucai.png')} onClick={this.materialClick} />}
                                    >
                                        <Meta title="活动素材" description="清晰展示活动产品优势" />
                                    </Card>
                                    <Modal
                                        title="H5页面预览"
                                        visible={this.state.visible}
                                        onCancel={this.handleCancel}
                                        footer={null}
                                    >
                                        <iframe src="./active_h5/index.html" title="h5" frameBorder="0" style={{ border: 0, width: "100%", height: 630 }} />
                                    </Modal>
                                </Card>
                            </Col>
                            <Col span={24} style={{marginTop:50}}>
                                新增素材：
                                <Upload {...uploadprops} style={{ width: 200 }}>
                                    <Button>
                                        <Icon type="upload" /> 点击上传
                                    </Button>
                                </Upload>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="活动流程" key="3">
                        <Row>
                            <Col style={{ textAlign: 'center' }} span={24}>
                                <img src={require('../../assets/img/active_flow.png')} width="100%" alt="" />
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
                                    placeholder="选择活动产品"
                                    defaultValue={['微信公众号', '短信']}
                                    onChange={this.productChange}
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
                                    placeholder="选择活动产品"
                                    value="按周"
                                    onChange={this.productChange}
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
                                    defaultValue={['1', '2']}
                                    onChange={this.productChange}
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
                                    defaultValue={['爱奇艺会员卡', '美团优惠券']}
                                    onChange={this.productChange}
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
                                活动效果接口
                            </Col>
                            <Col span={16}>
                                根据 表<Select placeholder="输入字段" style={{ width: 100, marginLeft: 5, marginRight: 5 }} defaultValue="success">
                                    <Option value="success">success</Option>
                                    <Option value="reach">reach</Option>
                                    <Option value="list">list</Option>
                                </Select>中的
                                <Input placeholder="输入字段" style={{ width: 100, marginLeft: 5, marginRight: 5 }} value={`response`} />字段判断，
                                成功为<Input placeholder="输入字段" style={{ width: 50, marginLeft: 5, marginRight: 5 }} value={`Y`} />，
                                不成功为<Input placeholder="输入字段" style={{ width: 50, marginLeft: 5, marginRight: 5 }} value={`N`} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 50 }}>
                            <Col span={24} style={{ textAlign: 'center' }}>
                                <Button type="primary" onClick={this.createActive}>确定更新</Button>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </>
        )
    }
}

export default MarketingEdit;