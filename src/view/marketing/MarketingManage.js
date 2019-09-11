/**
 * 活动管理页面
 */
import React from 'react';
import { Tabs, Table, Row, Col, Input, Button } from 'antd';
import history from '../../history';
const { TabPane } = Tabs;
class MarketingManage extends React.Component {
    onEdit = ()=>{
        history.push("/marketing/edit");
    }
    render() {
         // 活动管理
         const onEdit = this.onEdit;
         const peopledataSource = [
            {
                id: 1,
                active_name: '新户首月天天五折',
                active_people: "旅游",
                active_material: '已选',
                active_flow: '已创建',
                active_prod: ['阳光信用卡','趣分期'],
                active_equit: ['爱奇艺会员','美团优惠券'],
                active_api: "表success字段response",
            },
            {
                id: 2,
                active_name: '信用卡首刷礼',
                active_people: "消费",
                active_material: '已选',
                active_flow: '已创建',
                active_prod: ['阳光信用卡','趣分期'],
                active_equit: ['爱奇艺会员','美团优惠券'],
                active_api: "表active字段response",
            },
            {
                id: 3,
                active_name: '分期手续费七折优惠',
                active_people: "消费",
                active_material: '已选',
                active_flow: '已创建',
                active_prod: ['太阳信用卡'],
                active_equit: ['爱奇艺会员','美团优惠券'],
                active_api: "表active字段response",
            }
        ]
        const peoplecolumns = [
            {
                title: '活动ID',
                dataIndex: 'id',
            },
            {
                title: '活动名称',
                dataIndex: 'active_name',
            },
            {
                title: '活动目标人群',
                dataIndex: 'active_people',
            },
            {
                title: '素材',
                dataIndex: 'active_material',
            },
            {
                title: '活动流程',
                dataIndex: 'active_flow',
            },
            {
                title: '活动产品',
                dataIndex: 'active_prod',
                render(text,record,index){
                    return (<span>
                        {
                            record.active_prod.join('、')
                        }
                    </span>)
                }
            },
            {
                title: '活动权益',
                dataIndex: 'active_equit',
                render(text,record,index){
                    return (<span>
                        {
                            record.active_equit.join('、')
                        }
                    </span>)
                }
            },
            {
                title: '活动效果接口',
                dataIndex: 'active_api',
            },
            {
                title: '操作',
                render(){
                    return <Button type="primary" onClick={onEdit} size="small">查看</Button>
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