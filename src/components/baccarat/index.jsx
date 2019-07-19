import React, { Component } from 'react';
import {Row,Col,Tabs} from 'antd';
import ManualTabToBet from './manualtabtobet';
import AutoTabToBet from './autotabtobet';
import './index.css';
const { TabPane } = Tabs;
class Baccarat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            manual:{
                selectedchipvalue:'0.0000000',
                 squeezechecked:false
            },
            auto:{
                selectedchipvalue:'0.0000000',                
            }
         }
    }

    handleSqueezeChecked=(e)=>{
        if(e === 'manual'){
            let oldState = {...this.state.manual}
            oldState.squeezechecked= !oldState.squeezechecked
            this.setState({manual:oldState})
        }
       
    }
    onChangeWin=(e)=>{
    console.log('onChangeWin',e)
    }
    render() { 
        return ( 
            <div className="baccarat">
             <Row>
                <Col span={18} push={6}>
               Game section
                </Col>
                <Col span={6} pull={18}>
                <Tabs defaultActiveKey="manual" size={'small'} className="baccarat_tab">
                <TabPane tab="Manual" key="manual">
                    <ManualTabToBet {...this.state.manual} handlesqueezechecked={this.handleSqueezeChecked}/>
                </TabPane>
                <TabPane tab="Auto" key="auto">
                   <AutoTabToBet  {...this.state.auto} on_change_win={this.onChangeWin} on_change_loss={this.onChangeLoss}/>
                </TabPane>
                </Tabs>
                </Col>
                </Row>
            </div>    
         );
    }
}
 
export default Baccarat;


