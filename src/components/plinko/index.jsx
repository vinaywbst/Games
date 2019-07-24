import React, { Component } from 'react';
import {Row,Col,Tabs} from 'antd';
import ManualTabToBet from './manualtabtobet';
import AutoTabToBet from './autotabtobet';
import './index.css';
const { TabPane } = Tabs;
class Plinko extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="plinko">
            <Row>
               <Col className="main_section" span={18} push={6}  gutter={16}>
                  plinko game section
               </Col>
               <Col span={6} pull={18}>
               <Tabs defaultActiveKey="manual" size={'small'} className="plinko_tab">
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
 
export default Plinko;