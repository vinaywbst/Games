import React, { Component } from 'react';
import {Input,Button, Divider,Select} from 'antd';
const { Option } = Select;
class AutoTabToBet extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="auto_tab manual_tab">
                <>
                <label>Bet Amount</label>
                <div className="total_bet">
                <Input defaultValue="0.00000000" size={'large'} readOnly={true}/>
                <Button disabled={this.props.betdisabeled} size={'large'}>½</Button>
                <Divider type={"vertical"} /> 
                <Button disabled={this.props.betdisabeled} size={'large'}>2×</Button>        
                </div>
                </>
                <>
                <label>Risk</label>
                <div className="total_bet">
                <Select defaultValue="Low" disabled={this.props.betdisabeled} className="custom-select">
                <Option value="Low">Low</Option>
                <Option value="Medium">Medium</Option>
                <Option value="High">High</Option>
                </Select>        
                </div>
                </>
                <>
                <label>Rows</label>
                <div className="total_bet">
                <Select defaultValue={16} className="custom-select" disabled={this.props.betrowdisabeled} onChange={this.props.changeRows.bind(this)}>
                <Option value={8}>8</Option>
                <Option value={9}>9</Option>
                <Option value={10}>10</Option>
                <Option value={11}>11</Option>
                <Option value={12}>12</Option>
                <Option value={13}>13</Option>
                <Option value={14}>14</Option>
                <Option value={15}>15</Option>
                <Option value={16}>16</Option>
                </Select>        
                </div>
                </>
                <>
                <label>Number of Bets</label>
                <div className="total_bet">
                <Input value={this.props.noofautobets} size={'large'} type='number' onChange={this.props.handleNoOFAutoBets} disabled={this.props.betrowdisabeled}/>       
                </div>
                </>
               
                <>
                <Button className="bet-btn" block size={'large'} disabled={this.props.betdisabeled} onClick={this.props.dropChips.bind(this,'autobet')}>{this.props.betdisabeled ? 'Stop Autobet' : 'Start Autobet'}</Button>
                </>
            </div>
         );
    }
}
export default AutoTabToBet;