import React from 'react';
import { World, Engine, Render, Events } from 'matter-js';
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
      ROWS: 16,
      footer: {
        a8: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        a9: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        a10: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        a11: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        a12: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
        a13: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
        a14: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        a15: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
        a16: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'],
      },
      ROW_ADJUSTMENT: 0.9,
      COL_ADJUSTMENT: 0.8,
      CANVAS_WIDTH: 760,
      CANVAS_HEIGHT: 570,
      CANVAS_COLOR: 'rgba(18, 34, 46, 1)',
      TIMESTEP: MS_IN_SECOND / FPS,
      PARTICLE: PARTICLE
    }

  }
  createCanvas = () => {
    this.engine = Engine.create(document.getElementById('techvr'));
    this.engine.world.gravity.y = 1.5;
    this.engine.render.canvas.height = this.state.CANVAS_HEIGHT;
    this.engine.render.canvas.width = this.state.CANVAS_WIDTH;
    this.engine.render.options.wireframes = false;
    this.engine.render.options.background = this.state.CANVAS_COLOR;
    Engine.run(this.engine);
  }
  dropChips = (e) => {
    if (e === 'manualbet') {
      this._createParticle()
    }
    if (e === 'autobet') {
      this._createParticle()
    }
  }
  changeRows = (e) => {
    document.getElementById('techvr').innerHTML = '';
    World.remove(this.engine.world, "composite")
    Render.stop(this.render);
    Engine.clear(this.engine);
    Events.off(this.engine, 'collisionStart', this.onCollisionStart);
    this.setState({
      ROWS: e
    })
    this.createCanvas()
    this.init(e);
  }



  componentDidMount() {
    this.createCanvas()
    this.init(16);

  }
  init(ROWS) {
    this.particles = {};
    this.plinkos = {};
    this.lastParticleId = 0;
    this.isRunning = false;
    this.createEnvironment(ROWS);

  }




  _createParticle = () => {
    const id = this.lastParticleId++ % 255;
    const x = Math.floor(Math.random() * (400 - 350 + 1)) + 350;
    const y = 16.72686230248307;
    let particle = new Particle({ id, x, y });
    particle.recentlyDropped = true;
    this.particles[String(id)] = particle;
    particle.addToEngine(this.engine.world);
    Engine.update(this.engine, this.state.TIMESTEP);    
    let checkParticleStatus = setInterval(() => {
      this.engine.world.bodies.forEach(dt => {
        if (dt.label === 'particle' && dt.position.y > this.state.CANVAS_HEIGHT - 5 - (this.state.PARTICLE.DIAMETER) / 2) {
          const particle = dt.parentObject
          let newARr = []
          let count = 0;
          let arr = this.engine.world.bodies.filter(el => el.label === "plinko")
          for (let i = arr.length - 1; i >= 0; i--) {
            count = count + 1

            if (count <= this.state.ROWS + 2) {
              newARr.push(arr[i])
            }
          }
          let index = null
        
          newARr.reverse().filter((el, i) => {
         
            if (el.position.x > particle.body.position.x) {
              if (index === null) {
                index = i
                return el
              }
            }
          if(index !== null){
            let pgd = `peg${index}`
            this.setState({
              [pgd]:true
            },()=>{
              setTimeout(() => {
              this.setState({
                [pgd]:false
              })
              }, 100);
            })
          }
         
          })
       
        

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
        console.log(this.engine)
      }

      if (bodyA.label === 'plinko') {
        
        bodyA.render.lineWidth = 15
        setTimeout(() => {
          bodyA.render.lineWidth = 0
        }, 90);
      }


    }
  }
  _createPlinkos = (ROWS) => {
    let ROW_SPACING = this.state.CANVAS_HEIGHT / ROWS * this.state.ROW_ADJUSTMENT;
    let COL_SPACING = this.state.CANVAS_WIDTH / (ROWS + 2) * this.state.COL_ADJUSTMENT;
    this.setState({ COL_SPACING })
    const VERTICAL_MARGIN = ROW_SPACING * 1.5;
    const HORIZONTAL_OFFSET = COL_SPACING / 2;
    let id = 0;
    let row = 2
    for (row; row < ROWS + 2; row++) {
      let differ = ((((ROWS + 2) - row) * HORIZONTAL_OFFSET) + this.state.COL_ADJUSTMENT * 90)+4

      for (let col = 0; col <= row; col++) {
        let x = (col * COL_SPACING) + differ;
        let y = VERTICAL_MARGIN + ROWS + ((row - 2) * ROW_SPACING);
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
            <div id="techvr" />
            <div className={`pegs rows${this.state.ROWS}`}>
              <div className="pegs_wrapper" >
                {this.state.footer[`a${this.state.ROWS}`].map((el, i) => {
                  return <div className={`peg peg${i + 1}`} style={{top:this.state[`peg${i+1}`] ? '10px' : '0px'}}><span className="pegtext">{el}</span></div>
                })}
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
