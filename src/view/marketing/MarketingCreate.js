/**
 * 活动创建
 */
import React from 'react';
import ContentNav from 'src/components/ContentNav';
class MarketingCreate extends React.Component{
    render(){
        const navConfig = [{id:1,text:'活动目标人群',url:'/people'},{id:2,text:'素材管理',url:'/sd'},{id:3,text:'活动流程',url:'/sd'},]
        return (
            <>
                <ContentNav navConfig={navConfig}/>
            </>
        )
    }
}

export default MarketingCreate;