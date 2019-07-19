import React, { Component } from 'react';
import SingleGrid from './singlegrid';
import baccarat_bg from '../assets/images/baccarat_bg.svg';
import baccarat_bg_small from '../assets/images/baccarat_bg_small.svg';
import plinko_bg from '../assets/images/plinko_bg.svg';
import plinko_bg_small from '../assets/images/plinko_bg_small.svg';
import history from '../../history';
import {Row, Col} from 'antd';
import './index.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gridData:[{
                        id:'baccarat',
                        gamename:'Baccarat',
                        edgepercentage:11,
                        bgimage:baccarat_bg,
                        bgimagesmall:baccarat_bg_small
                        },
                        {
                            id:'plinko',
                            gamename:'Plinko',
                            edgepercentage:81,
                            bgimage:plinko_bg,
                            bgimagesmall:plinko_bg_small
                            }]
         }
    }

    handleGridClick = (e) => {
        history.push('/' + e)
    }
    render() { 
        return ( 
            <div className="home">
               <div className="wrapper">
                   <div className="grid_wrapper">
                   <Row gutter={16}>                   
                       {this.state.gridData.map((el)=>{
                          return <Col span={4}><SingleGrid id={el.id} name={el.gamename} edge={el.edgepercentage} main_bg={el.bgimage} small_bg={el.bgimagesmall} handle_grid_click={this.handleGridClick}/></Col>
                       })}
                       </Row>
                   </div>
               </div>
            </div>
         );
    }
}
 
export default Home;
