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
                <Button className="bet-btn" block size={'large'}>Bet</Button>
                </>
            </div>
         );
    }
}
 
export default ManualTabToBet;