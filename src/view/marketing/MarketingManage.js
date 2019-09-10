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
                title: '活动目标人群',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '素材',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '活动流程',
                dataIndex: 'sex',
                key: 'sex',
            },
            {
                title: '活动产品',
                dataIndex: 'behavior',
                key: 'behavior',
            },
            {
                title: '活动权益',
                dataIndex: 'rank',
                key: 'rank',
            },
            {
                title: '活动效果接口',
                dataIndex: 'rank',
                key: 'rank',
            },
            {
                title: '操作',
                dataIndex: 'rank',
                render(){
                    return <Button type="primary">修改</Button>
                }
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