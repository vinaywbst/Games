import React, { Component } from 'react';
import { World, Engine } from 'matter-js';
import { Row, Col, Tabs } from 'antd';
import ManualTabToBet from './manualtabtobet';
import AutoTabToBet from './autotabtobet';
import GameEngine from './GameEngine';
import { PARTICLE } from './constants/bodies';
import './index.css';
const MS_IN_SECOND = 2000;
const FPS = 60;
const { TabPane } = Tabs;
class Plinko extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ROWS: 16,
            ROW_ADJUSTMENT: 0.9,
            COL_ADJUSTMENT: 0.8,
            CANVAS_WIDTH: 760,
            CANVAS_HEIGHT: 570,
            CANVAS_COLOR: 'rgba(18, 34, 46, 1)',
            TIMESTEP: MS_IN_SECOND / FPS,
            PARTICLE: PARTICLE
        }
    }
    componentDidMount() {
        this.startGameEngine()
    }
    startGameEngine = () => {
        this.client = new GameEngine({...this.state});
    }
    dropChips = (e) => {
        if (e === 'manualbet') {
          
            this.client._createParticle()
        }
        if (e === 'autobet') {
        this.client._createParticle()
        }
    }
    changeRows = (e) => {
        this.setState({
            ROWS: e
        },()=>{
            this.client = new GameEngine({...this.state});
        })
    }

   
    render() {
        return (
            <div className="plinko">
                <Row>
                    <Col className="main_section" span={18} push={6} gutter={16}>
                        <div className="canvas-container" id="techvr">
                            <GameEngine {...this.state}/>
                        </div>
                    </Col>
                    <Col span={6} pull={18} className="plinko_tab_sidepanel">
                        <Tabs defaultActiveKey="manual" size={'small'} className="plinko_tab">
                            <TabPane tab="Manual" key="manual">
                                <ManualTabToBet {...this.state.manual} dropChips={this.dropChips} changeRows={this.changeRows} />
                            </TabPane>
                            <TabPane tab="Auto" key="auto">
                                <AutoTabToBet  {...this.state.auto} on_change_win={this.onChangeWin} on_change_loss={this.onChangeLoss} dropChips={this.dropChips} changeRows={this.changeRows} />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Plinko;