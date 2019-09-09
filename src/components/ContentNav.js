import React from 'react';
import {NavLink} from 'react-router-dom';
class ContentNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul style={{height:40,borderBottom:'1px solid #ddd',listStyle:'none'}}>
                {
                    this.props.navConfig.map(item=>{
                        return <NavLink to={item.url} key={item.id} activeStyle={{borderBottom:'2px solid blue'}}>{item.text}</NavLink>
                    })
                }
            </ul>
        )
    }
}

export default ContentNav;