import React from 'react';
// import {NavLink} from 'react-router-dom';
class ContentNav extends React.Component{
    render(){
        return (
            <ul className="content-nav">
                {
                    this.props.navConfig.map((item,index)=>{
                        return <li key={index}>{item.text}</li>
                    })
                }
            </ul>
        )
    }
}

export default ContentNav;