/**
 * 统计分析
 */
import React from 'react';
import { Tabs, Table, Row, Col, Input, Select, Button, Progress } from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;

class Statistics extends React.Component {
    constructor() {
        super();
        this.state = {
            peopledataSource: [
                {
                    id: 1,
                    active_name: '新户首月天天五折',
                    begin_date: '2019-01-01',
                    end_date: '2019-03-30',
                    people_count: 9100,
                    issue_count: 9032,
                    execute_count: 8830,
                    reach_count: 8580,
                    success_count: 1002
                },
                {
                    id: 2,
                    active_name: '信用卡首刷礼',
                    begin_date: '2019-05-01',
                    end_date: '2019-05-30',
                    people_count: 10900,
                    issue_count: 9932,
                    execute_count: 9830,
                    reach_count: 9580,
                    success_count: 1502
                },
                {
                    id: 3,
                    active_name: '分期手续费七折优惠',
                    begin_date: '2019-06-01',
                    end_date: '2019-06-30',
                    people_count: 9000,
                    issue_count: 8832,
                    execute_count: 8330,
                    reach_count: 8580,
                    success_count: 1202
                }
            ]
        }
    }
    render() {
        const peoplecolumns = [
            {
                title: '活动ID',
                dataIndex: 'id',
            }
            ,
            {
                title: '活动名称',
                dataIndex: 'active_name',
            },
            {
                title: '活动起始时间',
                dataIndex: 'begin_date',
            },
            {
                title: '活动结束日期',
                dataIndex: 'end_date',
            },
            {
                title: '活动名单数',
                dataIndex: 'people_count',
            },
            {
                title: '名单下发数',
                dataIndex: 'issue_count',
            },
            {
                title: '名单执行数',
                dataIndex: 'execute_count',
            },
            {
                title: '触达数量',
                dataIndex: 'reach_count',
            },
            {
                title: '成功数量',
                dataIndex: 'success_count',
            },
            {
                title: '成功率',
                render(text, record, index) {
                    const rate = parseFloat((record.success_count * 100 / record.people_count).toFixed(2));
                    return (<Progress percent={rate} size="small" />)
                }
            },
        ]
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="统计分析表格" key="1">
                    <Row>
                        <Col span={24}>
                            <span style={{ marginRight: 10 }}>活动ID</span>
                            <Input placeholder="输入活动ID" style={{ width: 200, marginRight: 10 }} />
                            <span style={{ marginRight: 10 }}>渠道类型</span>
                            <Select allowClear={true} style={{ width: 200, marginRight: 10 }}>
                                <Option value="微信公众号">微信公众号</Option>
                                <Option value="短信">短信</Option>
                                <Option value="营销电话">营销电话</Option>
                            </Select>
                            <span style={{ marginRight: 10 }}>机构</span>
                            <Select allowClear={true} style={{ width: 200, marginRight: 10 }}>
                                <Option value="广州农商行">广州农商行</Option>
                                <Option value="工商银行浦江支行">工商银行浦江支行</Option>
                                <Option value="中国银行广东分行">中国银行广东分行</Option>
                                <Option value="建设银行广东分行">建设银行广东分行</Option>
                                <Option value="中国邮政储蓄银行广东分行">中国邮政储蓄银行广东分行</Option>
                            </Select>
                            <Button type="primary">检索</Button>
                        </Col>
                    </Row>
                    <Table dataSource={this.state.peopledataSource} columns={peoplecolumns} style={{ marginTop: 10 }} bordered={true} rowKey={(record) => record.id} />
                </TabPane>
                <TabPane tab="统计分析树状图" key="2">
                    <Row>
                        <Col span={24}>
                            <span style={{ marginRight: 10 }}>活动ID</span>
                            <Input placeholder="输入活动ID" style={{ width: 200, marginRight: 10 }} defaultValue={1} />
                            <Button type="primary">检索</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{ position: 'relative', height: 600 }}>
                            <div className="statistics_tree_title">
                                <p style={{ textAlign: 'center' }}>活动客户名单总数</p>
                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>10000</p>
                            </div>
                            <div className="statistics_tree_title_line_cloumn"></div>
                            <div className="statistics_tree_title_line_row"></div>
                            <div className="statistics_tree_left">
                                <p style={{ textAlign: 'center' }}>名单触达数</p>
                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>8970</p>
                            </div>
                            <div className="statistics_tree_right">
                                <p style={{ textAlign: 'center' }}>未触达数</p>
                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>1030</p>

                            </div>
                            <div className="statistics_tree_left_line_cloumn"></div>
                            <div className="statistics_tree_left_line_row"></div>
                            <div className="statistics_tree_left_left">
                                <p style={{ textAlign: 'center' }}>名单响应数</p>
                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>6598</p>

                            </div>
                            <div className="statistics_tree_left_right">
                                <p style={{ textAlign: 'center' }}>未响应数</p>
                                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>2372</p>

                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        )
    }
}

export default Statistics;