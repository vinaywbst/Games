import React, { Component } from 'react';
import {Row,Col,Tabs,Button,Icon} from 'antd';
import ManualTabToBet from './manualtabtobet';
import AutoTabToBet from './autotabtobet';
import bgimg from '../assets/images/baccarat_game_bg.svg';
import chip_dot from '../assets/images/chip_dot.svg';
import undoimg from '../assets/images/undo.svg';
import rotateimg from '../assets/images/rotate.svg';
import cards from '../assets/images/cardimage.svg';
import './index.css';
const { TabPane } = Tabs;
class Baccarat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playeramount:0,
            tieamount:0,
            bankeramount:0,
            onClickPlayerCoinValue:0,
            onClickTieCoinValue:0,
            onClickBankerCoinValue:0,
            manual:{
                selectedchipvalue:0,
                 squeezechecked:false,                
                 
            },
            auto:{
                selectedchipvalue:0,                
            },
            playerCoinChildren:0,
            tieCoinChildren:0,
            bankerCoinChildren:0,
            betmultiply:2,
            winammount:'0.00000000',
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
    handleCoin=(e)=>{
   if(e === 'playerclicked'){
       if(this.state.playerCoinChildren < 5){
    this.setState({playerCoinChildren:this.state.playerCoinChildren+1})
   }}
   if(e === 'tieclicked'){
        if(this.state.tieCoinChildren < 5){
    this.setState({tieCoinChildren:this.state.tieCoinChildren+1})
    }}
    if(e === 'bankerclicked'){
        if(this.state.bankerCoinChildren < 5){
    this.setState({bankerCoinChildren:this.state.bankerCoinChildren+1})
    }}
    }
    render() { 
        const playercoinchildren = []
        const tiecoinchildren = []
        const bankercoinchildren = []
        for (var i = 0; i < this.state.playerCoinChildren; i += 1) {
            playercoinchildren.push(<CoinComponent onClickCoinValue={this.state.onClickPlayerCoinValue} key={i} number={i} />);
          };
        for (var i = 0; i < this.state.tieCoinChildren; i += 1) {
        tiecoinchildren.push(<CoinComponent onClickCoinValue={this.state.onClickTieCoinValue} key={i} number={i} />);
        };
        for (var i = 0; i < this.state.bankerCoinChildren; i += 1) {
        bankercoinchildren.push(<CoinComponent onClickCoinValue={this.state.onClickBankerCoinValue} key={i} number={i} />);
        };
        return ( 
            <div className="baccarat">
             <Row>
                <Col className="main_section" span={18} push={6}  gutter={16} style={{backgroundImage:`url(`+ bgimg +`)`}}>
                    <div className="cards">
                        <div className="image_cards">
                            <img src={cards} alt="cards"/>
                        </div>
                    </div>
                <div className="baccarat_main">
                    
                </div>
                <div className="baccarat_footer">
                   <div className="wrapper">
                       <div className="text">Place your bets</div>
                       <div className="inner_col">
                   <Button className="custom_bet_btn" onClick={this.handleCoin.bind(this,'playerclicked')}>
                       <div className="player">
                           PLAYER
                       </div>
                       <div className="amount">
                           {this.state.playeramount === 0 ? '0.00000000' : this.state.playeramount}
                       </div>
                      <div className="coin_wrapper">
                     {playercoinchildren}
                      </div>
                   </Button>
                   </div>
                   <div className="inner_col">
                    <Button className="custom_bet_btn" onClick={this.handleCoin.bind(this,'tieclicked')}>
                       <div className="player">
                           TIE
                       </div>
                       <div className="amount">
                           {this.state.tieamount === 0 ? '0.00000000' : this.state.tieamount}
                       </div>
                       <div className="coin_wrapper">
                     {tiecoinchildren}
                      </div>
                   </Button>
                 </div>
                
                 <div className="inner_col">
                    <Button className="custom_bet_btn" onClick={this.handleCoin.bind(this,'bankerclicked')}>
                       <div className="player">
                           BANKER
                       </div>
                       <div className="amount">
                           {this.state.bankeramount === 0 ? '0.00000000' : this.state.bankeramount}
                       </div>
                       <div className="coin_wrapper">
                     {bankercoinchildren}
                      </div>
                   </Button>
                   </div>  
                   </div>       
               
               <div className="btn_wrapper">
               <Button className="undo" type="link" size='large'><span className="icon_"><img src={undoimg} alt="undo"/></span> Undo</Button>
               <Button className="clear" type="link" size='large'>Clear <span className="icon_"><img src={rotateimg} alt="undo"/></span></Button>
               </div>

                </div>
                <div className="bet_notification_wrapper">
                <div className="bet_notification_inner">
                    <span className="text">{this.state.betmultiply}x</span>
                    <span className="win_amt">
                        <span>{this.state.winammount}</span>
                    </span>
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


class CoinComponent extends Component {
    render() { 
        return ( <div className="coin_image" style={{backgroundImage:'url('+ chip_dot +')'}}>
        <div className="coin_value">
            {this.props.onClickCoinValue}
        </div>
        </div> );
    }
}
 