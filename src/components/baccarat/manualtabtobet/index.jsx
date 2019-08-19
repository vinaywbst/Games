import React, { Component } from 'react';
import {Input,Button, Divider,Checkbox} from 'antd';
import SliderChips from '../sliderchips';
class ManualTabToBet extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      
        return ( 
            <div className="manual_tab">
                <>
                <label>Chip Value ({this.props.selectedchipvalue.toFixed(8)})</label>
                <SliderChips {...this.props}/>
                </>
                <>
                <label>Total Bet</label>
                <div className="total_bet">
                <Input value={this.props.totalBetAmount.toFixed(8)} size={'large'} readOnly={true}/>
                <Button size={'large'} onClick={this.props.handleCoin.bind(this,'half')}>½</Button>
                <Divider type={"vertical"} /> 
                <Button size={'large'} onClick={this.props.handleCoin.bind(this,'double')}>2×</Button>        
                </div>
                </>
                <>
                <div className="squeeze">
                <Checkbox
                checked={this.props.squeezechecked}
                onChange={this.props.handlesqueezechecked.bind(this,'manual')}
                     >
                Enable Squeeze
                </Checkbox>
                </div>
                </>
                <>
                <Button className="bet-btn" block size={'large'} disabled={this.props.manual_tab_bet_button} onClick={this.props.handleBet.bind(this,'handleManualBet')}>Bet</Button>
                </>
            </div>
         );
    }
}
 
export default ManualTabToBet;