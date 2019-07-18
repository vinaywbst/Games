import React, { Component } from 'react';
import history from '../../history';
import {Layout,Menu} from 'antd';
import './index.css';
const { Header} = Layout;

class SiteHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            selectedMenu:'/'
        }
    }

componentWillMount(){
    this.setState({selectedMenu:history.location.pathname})
  
}
    handleMenuClick=(e)=>{       
            history.push(e.key)
    }
    render() { 
      
        return ( 
            <div className="header">
               <Header>
                <div className="logo">BetProtocol</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.state.selectedMenu.toString()]}
                    style={{ lineHeight: '64px' }}
                    onClick={this.handleMenuClick}
                >
                    <Menu.Item key="/">Home</Menu.Item>
                    <Menu.Item key="/baccarat">Baccarat</Menu.Item>
                    <Menu.Item key="/plinko">Plinko</Menu.Item>
                </Menu>
                </Header>
            </div>
         );
    }
}
 
export default SiteHeader;