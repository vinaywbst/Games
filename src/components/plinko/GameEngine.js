import React from 'react';
import { World, Engine, Render,Events } from 'matter-js';
import Plinko from './game/plinko';
import Particle from './game/particle';
import { Row, Col, Tabs } from 'antd';
import ManualTabToBet from './manualtabtobet';
import AutoTabToBet from './autotabtobet';
import { PARTICLE } from './constants/bodies';
const MS_IN_SECOND = 2000;
const FPS = 60;
const { TabPane } = Tabs;
export default class GameEngine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ROW_ADJUSTMENT: 0.9,
      COL_ADJUSTMENT: 0.8,
      CANVAS_WIDTH: 760,
      CANVAS_HEIGHT: 570,
      CANVAS_COLOR: 'rgba(18, 34, 46, 1)',
      TIMESTEP: MS_IN_SECOND / FPS,
      PARTICLE: PARTICLE
  }
  
  }
  createCanvas=()=>{
    this.engine = Engine.create();
    this.engine.world.gravity.y = 1;
  }
  dropChips = (e) => {
    if (e === 'manualbet') {
        this._createParticle()
    }
    if (e === 'autobet') {
    this._createParticle()
    }
}
changeRows = async(e) => {
  // document.getElementById('techvr').innerHTML = '';
  // World.remove(this.engine.world,"composite")
  // await Render.stop(this.render);
  // await Engine.clear(this.engine);
  // await Events.off(this.engine, 'collisionStart', this.onCollisionStart);
  // await this.createCanvas()  
  // await this.init(e);
  // await this.startGame();
  // await console.log(this.engine)
 
  
}

  componentDidMount() {
    this.createCanvas()  
    this.init(16);
    this.startGame();
  }
  init (ROWS) {
    this.particles = {};
    this.plinkos = {};
    this.lastParticleId = 0;
    this.isRunning = false;
    this.createEnvironment(ROWS);
    return this;
  }



  startGame = () => {

    this.options = {
      width: this.state.CANVAS_WIDTH,
      height: this.state.CANVAS_HEIGHT,
      wireframes: false,  
      background: this.state.CANVAS_COLOR
    }
    this.render = Render.create({
      element:document.getElementById('techvr'),
      engine: this.engine,
      options: this.options
    });
    Render.run(this.render);
    Engine.run(this.engine);
  }



  _createParticle=async()=> {
    const id = this.lastParticleId++ %255;
    const x = Math.floor(Math.random() * (400 - 350 + 1)) + 350;
    const y = 16.72686230248307;
    let particle = new Particle({ id, x, y });
    particle.recentlyDropped = true;
    this.particles[String(id)] = particle;
    await particle.addToEngine(this.engine.world);
    await Engine.update(this.engine, this.state.TIMESTEP);
    let checkParticleStatus = setInterval(() => {
      this.engine.world.bodies.forEach(dt => {
        if (dt.label === 'particle' && dt.position.y > this.state.CANVAS_HEIGHT - 5 - (this.state.PARTICLE.DIAMETER) / 2) {
          const particle = dt.parentObject
          console.log(particle.body.region.endCol+2,'particleparticle')
          World.remove(this.engine.world, particle.body)
          let checkParticle = this.engine.world.bodies.filter(el => el.label === 'particle')
          setTimeout(() => {
            if (checkParticle.length === 0) {
              clearInterval(checkParticleStatus)
            }
          }, 10);
        }
      })

    }, this.state.TIMESTEP);
  

  }

  
  onCollisionStart = (event) => {
    const pairs = event.pairs;

    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      const bodyA = pair.bodyA;
      const bodyB = pair.bodyB;

      if (bodyA.label === 'plinko' && bodyB.label === 'particle') {
      
      }

      if (bodyA.label === 'plinko') {
      
      }

    
    }
  }
  _createPlinkos=(ROWS)=> {
    let ROW_SPACING = this.state.CANVAS_HEIGHT / ROWS * this.state.ROW_ADJUSTMENT;
    let COL_SPACING = this.state.CANVAS_WIDTH / (ROWS + 2) * this.state.COL_ADJUSTMENT;
    const VERTICAL_MARGIN = ROW_SPACING * 1.5;
    const HORIZONTAL_OFFSET = COL_SPACING / 2;
    console.log(COL_SPACING)
    let id = 0;
    let row = 2
    for (row; row < ROWS + 2; row++) {
      let differ = (((ROWS + 2) - row) * HORIZONTAL_OFFSET) + this.state.COL_ADJUSTMENT * ((ROWS + 2) * 5)

      for (let col = 0; col <= row; col++) {
        let x = (col * COL_SPACING) + differ;
        let y = VERTICAL_MARGIN + ((row - 2) * ROW_SPACING);
        const plinko = new Plinko({ id, x, y });
        this.plinkos[id] = plinko;
        plinko.addToEngine(this.engine.world);
        id++;
      }
    }
  }

  createEnvironment(ROWS) {
    this._createPlinkos(ROWS);
    Events.on(this.engine, 'collisionStart', this.onCollisionStart);
  }
  render() {
    return (
      <Row>
      <Col className="main_section" span={18} push={6} gutter={16}>
          <div className="canvas-container">
          <div  id="techvr"/>
          <div className="pegs">
          <div className="pegs_wrapper">
          <div className="peg peg1">
            <span className="pegtext">110</span>
          </div>
          <div className="peg peg2">
            <span className="pegtext">41x</span>
          </div>
          <div className="peg peg3">
            <span className="pegtext">10x</span>
          </div>
          <div className="peg peg4">
            <span className="pegtext">5x</span>
          </div>
          <div className="peg peg5">
            <span className="pegtext">3x</span>
          </div>
          <div className="peg peg6">
            <span className="pegtext">1.5x</span>
          </div>
          <div className="peg peg7">
            <span className="pegtext">1x</span>
          </div>
          <div className="peg peg8">
            <span className="pegtext">0.5x</span>
          </div>
          <div className="peg peg9">
            <span className="pegtext">0.3x</span>
          </div>
          <div className="peg peg10">
            <span className="pegtext">0.5x</span>
          </div>
          <div className="peg peg11">
            <span className="pegtext">1x</span>
          </div>
          <div className="peg peg12">
            <span className="pegtext">1.5x</span>
          </div>
          <div className="peg peg13">
            <span className="pegtext">3x</span>
          </div>
          <div className="peg peg14">
            <span className="pegtext">5x</span>
          </div>
          <div className="peg peg15">
            <span className="pegtext">10x</span>
          </div>
          <div className="peg peg16">
            <span className="pegtext">41x</span>
          </div>
          <div className="peg peg17">
            <span className="pegtext">110x</span>
          </div>
            </div>
          </div>
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
    )
  }

}
