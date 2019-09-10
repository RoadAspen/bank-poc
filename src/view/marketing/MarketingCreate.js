/**
 * 活动创建
 */
import React from 'react';
// import ContentNav from '../../components/ContentNav';
import { Tabs, Upload, message, Button, Row, Col, Icon, Select, Input, Cascader, Table } from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;
class MarketingCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: 'file'
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
    render() {
        // 上传 按钮
        const uploadprops = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        // 地区级联选择
        const cityoptions = [
            {
                value: 'zhejiang',
                label: '浙江',
                children: [
                    {
                        value: 'hangzhou',
                        label: '杭州',
                        children: [
                            {
                                value: 'xihu',
                                label: '西湖',
                            },
                        ],
                    },
                ],
            },
            {
                value: 'jiangsu',
                label: '江苏',
                children: [
                    {
                        value: 'nanjing',
                        label: '南京',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: '中华门',
                            },
                        ],
                    },
                ],
            },
        ];

        // 活动人群表
        const peopledataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                sex: '男',
                behavior: '旅游',
                rank: '一级'
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                sex: '男',
                behavior: '旅游',
                rank: '二级'
            },
        ];
        // 活动人群列表
        const peoplecolumns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '地区',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            },
            {
                title: '行为偏好',
                dataIndex: 'behavior',
                key: 'behavior',
            },
            {
                title: '客户等级',
                dataIndex: 'rank',
                key: 'rank',
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
                                    <Option value="search">条件筛选</Option>
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
                                                defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                                                options={cityoptions}
                                                allowClear={true}
                                                onChange={this.onCascaderChange}
                                                style={{ width: 200, marginRight: 5 }}
                                            />
                                            行为偏好：<Input placeholder="行为偏好" className="create_people_input" />
                                            等级：<Input placeholder="等级" className="create_people_input" />
                                            <Button type="primary">确定</Button>
                                        </Col>
                                        <Col span={24}>
                                            <Table dataSource={peopledataSource} columns={peoplecolumns} style={{ marginTop: 10 }} bordered={true} />
                                        </Col>
                                    </Row>
                                )
                        }

                    </TabPane>
                    <TabPane tab="素材管理" key="2">
                        素材管理
                    </TabPane>
                    <TabPane tab="活动流程" key="3">
                        {/* <iframe src="http://ggeditor.com/demo/#/flow" frameborder="0" title="活动流程图" style={{width:'100%',height:600}}/> */}
                        <Row>
                            <Col style={{ textAlign: 'center' }}>
                                <TextArea rows={20} value={
                                    `if(response = 成功){
                                    活动成功
                                    }else{
                                     活动失败
                                    }`
                                }/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="活动设置" key="4">
                        <Row gutter={16} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                活动产品
                            </Col>
                            <Col span={16}>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="选择活动产品"
                                    defaultValue={['信用卡1', '分期1']}
                                    onChange={this.productChange}
                                >
                                    <Option value="信用卡1">信用卡1</Option>
                                    <Option value="分期1">分期1</Option>
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
                                >
                                    <Option value="爱奇艺会员卡">爱奇艺会员卡</Option>
                                    <Option value="美团优惠券">美团优惠券</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                活动效果接口
                            </Col>
                            <Col span={16}>
                                根据<Input placeholder="输入字段" style={{width:100,marginLeft:5,marginRight:5}} value={`response`}/>字段判断，
                                成功为<Input placeholder="输入字段" style={{width:50,marginLeft:5,marginRight:5}} value={`Y`}/>，
                                不成功为<Input placeholder="输入字段" style={{width:50,marginLeft:5,marginRight:5}} value={`N`}/>
                            </Col>
                        </Row>
                    </TabPane>
                    {/* <TabPane tab="活动权益" key="5">
                        活动权益
                    </TabPane>
                    <TabPane tab="活动效果接口" key="6">
                        活动效果接口
                    </TabPane> */}
                </Tabs>
            </>
        )
    }
}

export default MarketingCreate;