import Mock from 'mockjs';

function useMock() {
    // 登录数据
    Mock.mock(/\/loginRequest/, (req) => {
        const { username, password } = JSON.parse(req.body);
        if (username === "admin" && password === "admin") {
            return Mock.mock({
                "token": true
            })
        } else {
            return Mock.mock({
                "token": false
            })
        }
    })

    // 统计分析 表格
    Mock.mock(/\/statistics\/table/, (req) => {
        console.log(decodeURI(req.url));

        return Mock.mock({
            "count|20-30": 1,
            "resoult|40": [{
                "id|+1": 1,
                name: "信用卡激活",
                begin_date: "@date('yyyy-MM-dd')",
                end_date:"@date('yyyy-MM-dd')",
                "people_count|9800-10000":1,
                "issue_count|9700-9800":1,
                "execute_count|9600-9700":1,
                "reach_count|9580-9600":1,
                "success_count|9540-9580":1
            }]
        })
    })
    // 统计分析 树状图
    Mock.mock(/\/statistics\/table/, (req) => {
        console.log(decodeURI(req.url));

        return Mock.mock({
            "count|20-30": 1,
            "resoult|40": [{
                "id|+1": 1,
                name: "信用卡激活",
                begin_date: "@date('yyyy-MM-dd')",
                end_date:"@date('yyyy-MM-dd')",
                "people_count|9800-10000":1,
                "issue_count|9700-9800":1,
                "execute_count|9600-9700":1,
                "reach_count|9580-9600":1,
                "success_count|9540-9580":1
            }]
        })
    })

    // 创建活动
    Mock.mock(/\/statistics\/table/, (req) => {
        console.log(decodeURI(req.url));

        return Mock.mock({
            "count|20-30": 1,
            "resoult|4": [{
                "id|+1": 1,
                name: "信用卡激活",
                begin_date: "@date('yyyy-MM-dd')",
                end_date:"@date('yyyy-MM-dd')",
                "people_count|9800-10000":1,
                "issue_count|9700-9800":1,
                "execute_count|9600-9700":1,
                "reach_count|9580-9600":1,
                "success_count|954-1100":1
            }]
        })
    })
}

export default useMock;
