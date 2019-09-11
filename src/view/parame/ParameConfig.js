/**
 *  参数配置页面
 */

import React from 'react';
import { Form, Select, Button, Tabs, Comment, List, Input, Col, Row, Tag, Tooltip, Icon } from 'antd';
// import moment from 'moment';

const InputGroup = Input.Group;
const { Option } = Select;
const { TabPane } = Tabs;

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        itemLayout="horizontal"
        renderItem={props => (
            <List.Item>
                <List.Item.Meta
                    title={<div style={{ display: 'block !imporatant', flex: 0 }}>话术{props.id + 1}：</div>}
                />
                {props.content}
                {/* <Comment {...props} /> */}
            </List.Item>
        )}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                增加话术
        </Button>
        </Form.Item>
    </div>
);

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

class ParameConfig extends React.Component {
    state = {
        comments: [{
            id: 0,
            content: 'xxx用户，您现有本行信用卡首刷礼暂未领取，详情请登录官网查看。'
        }, {
            id: 1,
            content: '测试话术'
        }
        ],
        submitting: false,
        value: '',
        tags: ['公众号1', '公众号2', '公众号3'],
        inputVisible: false,
        inputValue: '',
        periodTags: ['按周', '按月', '按季度', '实时'],
        periodInputVisible: false,
        periodInputValue: '',
        areaTags: ['小型（100 人以内）', '中型（1000 人）', '大型（1000+ 人）']
    };

    render() {
        const { tags, inputVisible, inputValue } = this.state;
        const { periodTags, periodInputVisible, periodInputValue, areaTags } = this.state;
        return (
            <>
                <Form {...formItemLayout}>
                    <div>
                        {/* <div>渠道</div> */}
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="渠道" key="1">
                                <Form.Item label="微信公众号">
                                    {tags.map((tag, index) => {
                                        const isLongTag = tag.length > 20;
                                        const tagElem = (
                                            <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
                                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                            </Tag>
                                        );
                                        return isLongTag ? (
                                            <Tooltip title={tag} key={tag}>
                                                {tagElem}
                                            </Tooltip>
                                        ) : (
                                                tagElem
                                            );
                                    })}
                                    {inputVisible && (
                                        <Input
                                            ref={this.saveInputRef}
                                            type="text"
                                            size="small"
                                            style={{ width: 78 }}
                                            value={inputValue}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleInputConfirm}
                                            onPressEnter={this.handleInputConfirm}
                                        />
                                    )}
                                    {!inputVisible && (
                                        <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                                            <Icon type="plus" /> 新增微信公众号
                                        </Tag>
                                    )}
                                </Form.Item>
                                <Form.Item label="短信">
                                    <InputGroup size="small">
                                        <Row gutter={8}>
                                            {/* <Col span={5}>
                                                <Input defaultValue="0571" />
                                            </Col> */}
                                            <Col span={10}>
                                                <Input defaultValue="1069800095313" />
                                            </Col>
                                        </Row>
                                    </InputGroup>
                                </Form.Item>
                                <Form.Item label="客服电销">
                                    <InputGroup size="small">
                                        <Row gutter={10}>
                                            {/* <Col span={5}>
                                                <Input defaultValue="0571" />
                                            </Col> */}
                                            <Col span={8}>
                                                <Input defaultValue="95313" />
                                            </Col>
                                        </Row>
                                    </InputGroup>
                                </Form.Item>
                                <div style={{ textAlign: "center" }}>
                                    <Button type="primary" size="large">保存</Button>
                                </div>
                            </TabPane>
                            <TabPane tab="卡产品参数" key="2">
                                <Form.Item label="卡类型">
                                    <Select defaultValue="1">
                                        <Option value="1">白金卡</Option>
                                        <Option value="2">金卡</Option>
                                        <Option value="3">普卡</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="卡种">
                                    <Select defaultValue="1">
                                        <Option value="1">太阳全利卡</Option>
                                        <Option value="2">太阳全飞卡</Option>
                                        <Option value="3">太阳全乐卡</Option>
                                        <Option value="4">太阳全行卡</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="币种">
                                    <Select defaultValue="1">
                                        <Option value="1">人民币</Option>
                                        <Option value="2">美元</Option>
                                        <Option value="3">欧元</Option>
                                        <Option value="3">韩元</Option>
                                    </Select>
                                </Form.Item>
                                <div style={{ textAlign: "center" }}>
                                    <Button type="primary" size="large">保存</Button>
                                </div>
                            </TabPane>
                            <TabPane tab="市场活动" key="3">
                                <Form.Item label="周期">
                                {periodTags.map((tag, index) => {
                                        const isLongTag = tag.length > 20;
                                        const tagElem = (
                                            <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
                                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                            </Tag>
                                        );
                                        return isLongTag ? (
                                            <Tooltip title={tag} key={tag}>
                                                {tagElem}
                                            </Tooltip>
                                        ) : (
                                                tagElem
                                            );
                                    })}
                                    {periodInputVisible && (
                                        <Input
                                            ref={this.saveInputRef}
                                            type="text"
                                            size="small"
                                            style={{ width: 78 }}
                                            value={periodInputValue}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleInputConfirm}
                                            onPressEnter={this.handleInputConfirm}
                                        />
                                    )}
                                    {!periodInputVisible && (
                                        <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                                            <Icon type="plus" /> 新增周期
                                        </Tag>
                                    )}
                                </Form.Item>
                                <Form.Item label="规模">
                                {areaTags.map((tag, index) => {
                                        const isLongTag = tag.length > 20;
                                        const tagElem = (
                                            <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
                                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                            </Tag>
                                        );
                                        return isLongTag ? (
                                            <Tooltip title={tag} key={tag}>
                                                {tagElem}
                                            </Tooltip>
                                        ) : (
                                                tagElem
                                            );
                                    })}
                                    {periodInputVisible && (
                                        <Input
                                            ref={this.saveInputRef}
                                            type="text"
                                            size="small"
                                            style={{ width: 78 }}
                                            value={periodInputValue}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleInputConfirm}
                                            onPressEnter={this.handleInputConfirm}
                                        />
                                    )}
                                    {!periodInputVisible && (
                                        <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                                            <Icon type="plus" /> 新增规模
                                        </Tag>
                                    )}
                                </Form.Item>
                                <div style={{ textAlign: "center" }}>
                                    <Button type="primary" size="large">保存</Button>
                                </div>
                            </TabPane>
                            <TabPane tab="营销话术" key="4">
                                {this.state.comments.length > 0 && <CommentList comments={this.state.comments} />}
                                <Comment
                                    content={
                                        <Editor
                                            onChange={this.handleChange}
                                            onSubmit={this.handleSubmit}
                                            submitting={this.state.submitting}
                                            value={this.state.value}
                                        />
                                    }
                                />
                            </TabPane>
                        </Tabs>
                    </div>

                    {/* <Button type="danger" size="large">取消</Button> */}
                </Form>
            </>
        )
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    ...this.state.comments,
                    {
                        id: this.state.comments.length,
                        content: this.state.value
                    }
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };


    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => (this.input = input);
}

export default ParameConfig;