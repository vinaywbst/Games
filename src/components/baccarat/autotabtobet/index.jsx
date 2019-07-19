import React, { Component } from 'react';
import {Input,Radio,Button, Divider} from 'antd';
import SliderChips from '../sliderchips';
class AutoTabToBet extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="auto_tab manual_tab">
                 <>
                <label>Chip Value ({this.props.selectedchipvalue})</label>
                <SliderChips/>
                </>
                <>
                <label>Total Bet</label>
                <div className="total_bet">
                <Input defaultValue="0.00000000" size={'large'} readOnly={true}/>
                <Button size={'large'}>½</Button>
                <Divider type={"vertical"} /> 
                <Button size={'large'}>2×</Button>        
                </div>
                </>
                <>
                <label>Number of Bets</label>
                <div className="total_bet">
                <Input defaultValue="0" size={'large'} type='number'/>       
                </div>
                </>
                <>
                <label>On Win</label>
                <div className="total_bet">
                <Radio.Group onChange={this.props.on_change_win} defaultValue="reset">
                    <Radio.Button value="reset">Reset</Radio.Button>
                    <Radio.Button value="increase by">Increase by:</Radio.Button>
                </Radio.Group>
                <Input defaultValue="0" size={'large'} type='number' addonAfter={'%'}/>       
                </div>
                </>
                <>
                <label>On Loss</label>
                <div className="total_bet">
                <Radio.Group onChange={this.props.on_change_loss} defaultValue="reset">
                    <Radio.Button value="reset">Reset</Radio.Button>
                    <Radio.Button value="increase by">Increase by:</Radio.Button>
                </Radio.Group>
                <Input defaultValue="0" size={'large'} type='number' addonAfter={'%'}/>       
                </div>
                </>
                <>
                <label>Stop on Profit</label>
                <div className="total_bet">
                <Input defaultValue="0.0000000" size={'large'} type='number'/>       
                </div>
                </>
                <>
                <label>Stop on Loss</label>
                <div className="total_bet">
                <Input defaultValue="0.0000000" size={'large'} type='number'/>       
                </div>
                </>
                <>
                <Button className="bet-btn" block size={'large'}>Start Autobet</Button>
                </>
            </div>
         );
    }
}
export default AutoTabToBet;