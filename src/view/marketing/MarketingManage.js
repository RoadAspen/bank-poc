/**
 * 活动管理页面
 */
import React from 'react';
import { Tabs, Table, Row, Col, Input, Select,Button } from 'antd';

const { TabPane } = Tabs;
const {Option} = Select;
class MarketingManage extends React.Component {
    render() {
        const peopledataSource = [
            {
                name: '信用卡还款抽奖',
                begin_time: ''
            }
        ];
        const peoplecolumns = [
            {
                title: '活动名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '活动起始时间',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '活动结束日期',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '名单',
                dataIndex: 'sex',
                key: 'sex',
            },
            {
                title: '触达',
                dataIndex: 'behavior',
                key: 'behavior',
            },
            {
                title: '成功数量',
                dataIndex: 'rank',
                key: 'rank',
            },
            {
                title: '成功率',
                dataIndex: 'rank',
                key: 'rank',
            },
        ]
        return (
            <>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="活动管理" key="1">
                        <Row>
                            <Col span={24}>
                                <span style={{marginRight:10}}>活动ID</span>
                                <Input placeholder="输入活动ID" style={{width:200,marginRight:10}}/>
                                <span style={{marginRight:10}}>渠道类型</span>
                                <Select allowClear={true} style={{width:200,marginRight:10}}>
                                    <Option value="渠道一">渠道一</Option>
                                    <Option value="渠道二">渠道二</Option>
                                </Select>
                                <span style={{marginRight:10}}>机构</span>
                                <Select allowClear={true} style={{width:200,marginRight:10}}>
                                    <Option value="交通银行上海分行">交通银行上海分行</Option>
                                    <Option value="工商银行浦江支行">工商银行浦江支行</Option>
                                </Select>
                                <Button type="primary">检索</Button>
                            </Col>
                        </Row>
                        <Table dataSource={peopledataSource} columns={peoplecolumns} style={{ marginTop: 10 }} bordered={true} />
                    </TabPane>
                </Tabs>
            </>
        )
    }
}

export default MarketingManage;