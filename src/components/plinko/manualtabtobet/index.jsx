import React, { Component } from 'react';
import {Input,Button, Divider,Select} from 'antd';
const { Option } = Select;
class ManualTabToBet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }


    render() { 
      
        return ( 
            <div className="manual_tab">
                 <>
                <label>Bet Amount</label>
                <div className="total_bet">
                <Input defaultValue="0.00000000" size={'large'} readOnly={true}/>
                <Button size={'large'}>½</Button>
                <Divider type={"vertical"} /> 
                <Button size={'large'}>2×</Button>        
                </div>
                </>
                <>
                <label>Risk</label>
                <div className="total_bet">
                <Select defaultValue="Low" className="custom-select">
                <Option value="Low">Low</Option>
                <Option value="Medium">Medium</Option>
                <Option value="High">High</Option>
                </Select>        
                </div>
                </>
                <>
                <label>Rows</label>
                <div className="total_bet">
                <Select defaultValue={16} className="custom-select" onChange={this.props.changeRows.bind(this)}>
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
                <Button className="bet-btn" block size={'large'} onClick={this.props.dropChips.bind(this,'manualbet')}>Bet</Button>
                </>
            </div>
         );
    }
}
 
export default ManualTabToBet;