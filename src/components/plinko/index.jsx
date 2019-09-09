import React, { Component } from 'react';
import {Row,Col,Tabs} from 'antd';
import ManualTabToBet from './manualtabtobet';
import AutoTabToBet from './autotabtobet';
import GameEngine from './GameEngine';
import {ROWS} from './constants/canvas';
import './index.css';
const { TabPane } = Tabs;
class Plinko extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.client = new GameEngine();  
        this.client.init();
        this.client.startGame();
      }

    dropChips = (e) =>{
            if(e==='manualbet'){
                this.client._createParticle()
            }
            if(e==='autobet'){
                this.client._createParticle()
            }
    }
    changeRows = (e) =>{
        let ROWS = ROWS
       this.setState({
        ROWS:e
       })
    }
    render() { 
        return ( 
            <div className="plinko">
            <Row>
               <Col className="main_section" span={18} push={6}  gutter={16}>
               <div className="canvas-container">
                  <div id="techvr"/>
                </div>
               </Col>
               <Col span={6} pull={18} className="plinko_tab_sidepanel">
               <Tabs defaultActiveKey="manual" size={'small'} className="plinko_tab">
               <TabPane tab="Manual" key="manual">
                   <ManualTabToBet {...this.state.manual} dropChips={this.dropChips} changeRows={this.changeRows}/>
               </TabPane>
               <TabPane tab="Auto" key="auto">
                  <AutoTabToBet  {...this.state.auto} on_change_win={this.onChangeWin} on_change_loss={this.onChangeLoss} dropChips={this.dropChips} changeRows={this.changeRows}/>
               </TabPane>
               </Tabs>
               </Col>
               </Row>
           </div>    
         );
    }
}
 
export default Plinko;