import React, { Component } from 'react';
import { Row, Col, Tabs, Button, Icon } from 'antd';
import ManualTabToBet from './manualtabtobet';
import AutoTabToBet from './autotabtobet';
import bgimg from '../assets/images/baccarat_game_bg.svg';
import chip_dot from '../assets/images/chip_dot.svg';
import undoimg from '../assets/images/undo.svg';
import rotateimg from '../assets/images/rotate.svg';
import cards from '../assets/images/cardimage.svg';
import club1 from '../assets/cards/AC.svg';
import club2 from '../assets/cards/2C.svg';
import club3 from '../assets/cards/3C.svg';
import club4 from '../assets/cards/4C.svg';
import club5 from '../assets/cards/5C.svg';
import club6 from '../assets/cards/6C.svg';
import club7 from '../assets/cards/7C.svg';
import club8 from '../assets/cards/8C.svg';
import club9 from '../assets/cards/9C.svg';
import club10 from '../assets/cards/10C.svg';
import clubJ from '../assets/cards/JC.svg';
import clubK from '../assets/cards/KC.svg';
import clubQ from '../assets/cards/QC.svg';


import diamond1 from '../assets/cards/AD.svg';
import diamond2 from '../assets/cards/2D.svg';
import diamond3 from '../assets/cards/3D.svg';
import diamond4 from '../assets/cards/4D.svg';
import diamond5 from '../assets/cards/5D.svg';
import diamond6 from '../assets/cards/6D.svg';
import diamond7 from '../assets/cards/7D.svg';
import diamond8 from '../assets/cards/8D.svg';
import diamond9 from '../assets/cards/9D.svg';
import diamond10 from '../assets/cards/10D.svg';
import diamondJ from '../assets/cards/JD.svg';
import diamondK from '../assets/cards/KD.svg';
import diamondQ from '../assets/cards/QD.svg';

import heart1 from '../assets/cards/AH.svg';
import heart2 from '../assets/cards/2H.svg';
import heart3 from '../assets/cards/3H.svg';
import heart4 from '../assets/cards/4H.svg';
import heart5 from '../assets/cards/5H.svg';
import heart6 from '../assets/cards/6H.svg';
import heart7 from '../assets/cards/7H.svg';
import heart8 from '../assets/cards/8H.svg';
import heart9 from '../assets/cards/9H.svg';
import heart10 from '../assets/cards/10H.svg';
import heartJ from '../assets/cards/JH.svg';
import heartK from '../assets/cards/KH.svg';
import heartQ from '../assets/cards/QH.svg';

import spades1 from '../assets/cards/AS.svg';
import spades2 from '../assets/cards/2S.svg';
import spades3 from '../assets/cards/3S.svg';
import spades4 from '../assets/cards/4S.svg';
import spades5 from '../assets/cards/5S.svg';
import spades6 from '../assets/cards/6S.svg';
import spades7 from '../assets/cards/7S.svg';
import spades8 from '../assets/cards/8S.svg';
import spades9 from '../assets/cards/9S.svg';
import spades10 from '../assets/cards/10S.svg';
import spadesJ from '../assets/cards/JS.svg';
import spadesK from '../assets/cards/KS.svg';
import spadesQ from '../assets/cards/QS.svg';
import './index.css';
import CardSection from './cardsection.jsx';
const { TabPane } = Tabs;
class Baccarat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playeramount: 0,
            tieamount: 0,
            bankeramount: 0,
            onClickPlayerCoinValue: 0,
            onClickTieCoinValue: 0,
            onClickBankerCoinValue: 0,
            manual: {
                selectedchipvalue: 0,
                squeezechecked: false,

            },
            auto: {
                selectedchipvalue: 0,
            },
            playerCoinChildren: 0,
            tieCoinChildren: 0,
            bankerCoinChildren: 0,
            betmultiply: 2,
            winammount: '0.00000000',
            sideA: {
                counter: '0',
                card1: spades1,
                card2: diamondQ,
                card3: club3
            },
            sideB: {
                counter: '0',
                card1: spades5,
                card2: diamondK,
                card3: club7
            },
            sideACard1: false,
            sideACard2: false,
            sideACard3: false,
            sideBCard1: false,
            sideBCard2: false,
            sideBCard3: false,
            sideAborderColor: 'transparent',
            sideBborderColor: 'transparent',
            notifyStatus: false,
            notifyStatusColor: '#00e403',
            sideACard1transform: 'translate(858%, -127%) rotateY(180deg)',
            sideACard2transform: 'translate(858%, -127%) rotateY(180deg)',
            sideACard3transform: 'translate(858%, -127%) rotateY(180deg)',
            sideBCard1transform: 'translate(290%, -127%) rotateY(180deg)',
            sideBCard2transform: 'translate(290%, -127%) rotateY(180deg)',
            sideBCard3transform: 'translate(290%, -127%) rotateY(180deg)',
        }
    }
    handleBet = async (e) => {
        if (e === 'handleManualBet') {
            await this.showCards(300, 1, "A", 'translate(0%, 0%) rotateY(180deg)')
            await this.showCards(300, 1, "B", 'translate(0%, 0%) rotateY(180deg)')
            await this.showCards(300, 2, "A", 'translate(0%, 0%) rotateY(180deg)')
            await this.showCards(300, 2, "B", 'translate(0%, 0%) rotateY(180deg)')
            await this.showCards(300, 3, "A", 'translate(0%, 0%) rotateY(180deg)')
            await this.showCards(300, 3, "B", 'translate(0%, 0%) rotateY(180deg)')
            setTimeout(() => {
                this.setState({
                    sideAborderColor: '#00e403',
                    notifyStatus: true
                })
            }, 500);
        }
    }
    showCards = async (time, val, data, rotateval) => {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                let sideCard = `side${data}Card${val}`
                let rotateState = `side${data}Card${val}transform`
                this.setState({
                    [sideCard]: true,
                    [rotateState]: rotateval
                }, () => {
                    setTimeout(() => {
                        this.setState({ [rotateState]: 'translate(0%, 0%) rotateY(0deg)' }, () => {
                            resolve(true)
                        })
                    }, 300);
                })
            }, time);
        })
    }


    handleSqueezeChecked = (e) => {
        if (e === 'manual') {
            let oldState = { ...this.state.manual }
            oldState.squeezechecked = !oldState.squeezechecked
            this.setState({ manual: oldState })
        }

    }


    onChangeWin = (e) => {
        console.log('onChangeWin', e)
    }
    handleCoin = (e) => {
        if (e === 'playerclicked') {
            if (this.state.playerCoinChildren < 5) {
                this.setState({ playerCoinChildren: this.state.playerCoinChildren + 1 })
            }
        }
        if (e === 'tieclicked') {
            if (this.state.tieCoinChildren < 5) {
                this.setState({ tieCoinChildren: this.state.tieCoinChildren + 1 })
            }
        }
        if (e === 'bankerclicked') {
            if (this.state.bankerCoinChildren < 5) {
                this.setState({ bankerCoinChildren: this.state.bankerCoinChildren + 1 })
            }
        }
    }
    render() {
        const playercoinchildren = []
        const tiecoinchildren = []
        const bankercoinchildren = []
        for (var i = 0; i < this.state.playerCoinChildren; i += 1) {
            playercoinchildren.push(<CoinComponent onClickCoinValue={this.state.onClickPlayerCoinValue} key={i} number={i} />);
        };
        for (var j = 0; j < this.state.tieCoinChildren; j += 1) {
            tiecoinchildren.push(<CoinComponent onClickCoinValue={this.state.onClickTieCoinValue} key={j} number={j} />);
        };
        for (var k = 0; k < this.state.bankerCoinChildren; k += 1) {
            bankercoinchildren.push(<CoinComponent onClickCoinValue={this.state.onClickBankerCoinValue} key={k} number={k} />);
        };
        return (
            <div className="baccarat">
                <Row>
                    <Col className="main_section" span={18} push={6} gutter={16} style={{ backgroundImage: `url(` + bgimg + `)` }}>
                        <div className="cards">
                            <div className="image_cards">
                                <img src={cards} alt="cards" />
                            </div>
                        </div>
                        <div className="baccarat_main">
                            <CardSection {...this.state} />
                        </div>
                        <div className="baccarat_footer">
                            <div className="wrapper">
                                <div className="text">Place your bets</div>
                                <div className="inner_col">
                                    <Button className="custom_bet_btn" onClick={this.handleCoin.bind(this, 'playerclicked')}>
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
                                    <Button className="custom_bet_btn" onClick={this.handleCoin.bind(this, 'tieclicked')}>
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
                                    <Button className="custom_bet_btn" onClick={this.handleCoin.bind(this, 'bankerclicked')}>
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
                                <Button className="undo" type="link" size='large'><span className="icon_"><img src={undoimg} alt="undo" /></span> Undo</Button>
                                <Button className="clear" type="link" size='large'>Clear <span className="icon_"><img src={rotateimg} alt="undo" /></span></Button>
                            </div>

                        </div>
                        {this.state.notifyStatus
                            &&
                            <div className="bet_notification_wrapper" style={{ color: this.state.notifyStatusColor, boxShadow: `0px 0px 0px 4px ${this.state.notifyStatusColor}` }}>
                                <div className="bet_notification_inner">
                                    <span className="text">{this.state.betmultiply}.00<span>+</span></span>
                                    <span className="win_amt">
                                        <span>{this.state.winammount}</span>
                                    </span>
                                </div>
                            </div>
                        }
                    </Col>
                    <Col span={6} pull={18}>
                        <Tabs defaultActiveKey="manual" size={'small'} className="baccarat_tab">
                            <TabPane tab="Manual" key="manual">
                                <ManualTabToBet {...this.state.manual} handlesqueezechecked={this.handleSqueezeChecked} handleBet={this.handleBet} />
                            </TabPane>
                            <TabPane tab="Auto" key="auto">
                                <AutoTabToBet  {...this.state.auto} on_change_win={this.onChangeWin} on_change_loss={this.onChangeLoss} />
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
        return (<div className="coin_image" style={{ backgroundImage: 'url(' + chip_dot + ')' }}>
            <div className="coin_value">
                {this.props.onClickCoinValue}
            </div>
        </div>);
    }
}
