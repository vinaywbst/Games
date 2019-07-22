import React, { Component } from 'react';
import {Row,Col,Tabs,Button,Icon} from 'antd';
import ManualTabToBet from './manualtabtobet';
import AutoTabToBet from './autotabtobet';
import bgimg from '../assets/images/baccarat_game_bg.svg';
import './index.css';
const { TabPane } = Tabs;
class Baccarat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playeramount:'0.0000000',
            tieamount:'0.0000000',
            bankeramount:'0.0000000',
            manual:{
                selectedchipvalue:'0.0000000',
                 squeezechecked:false,                
                 
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
                <Col className="main_section" span={18} push={6}  gutter={16} style={{backgroundImage:`url(`+ bgimg +`)`}}>
                <div className="baccarat_main">
                    
                </div>
                <div className="baccarat_footer">
                   <div className="wrapper">
                       <div className="text">Place your bets</div>
                       <div className="inner_col">
                   <Button className="custom_bet_btn">
                       <div className="player">
                           PLAYER
                       </div>
                       <div className="amount">
                           {this.state.playeramount}
                       </div>
                   </Button>
                   </div>
                   <div className="inner_col">
                    <Button className="custom_bet_btn">
                       <div className="player">
                           TIE
                       </div>
                       <div className="amount">
                           {this.state.tieamount}
                       </div>
                   </Button>
                 </div>
                
                 <div className="inner_col">
                    <Button className="custom_bet_btn">
                       <div className="player">
                           BANKER
                       </div>
                       <div className="amount">
                           {this.state.bankeramount}
                       </div>
                   </Button>
                   </div>  
                   </div>       
               
               <div className="btn_wrapper">
               <Button className="undo" type="link" size='large'><Icon type="undo" />Undo</Button>
               <Button className="clear" type="link" size='large'>Clear <Icon type="interaction" /></Button>
               </div>

                </div>
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


