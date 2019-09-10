import React from 'react';
import { World, Engine, Render } from 'matter-js';
import Plinko from './game/plinko';
import Particle from './game/particle';

export default class GameEngine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.canvasRef=React.createRef();
    this.engine = Engine.create();
    this.engine.world.gravity.y = 1;
  }
  componentDidMount() {
    this.options = {
      width: this.props.CANVAS_WIDTH,
      height: this.props.CANVAS_HEIGHT,
      wireframes: false,
      background: this.props.CANVAS_COLOR
    }
    this.render = Render.create({
      element:this.canvasRef.current,
      engine: this.engine,
      options: this.options
    });
    Render.run(this.render);
    this.init();
    this.startGame();
    this._createParticles();
  }
    _createParticles=()=>{
      setInterval(() => {
        this._createParticle();
      }, 2000);
    }
  init() {
    this.particles = {};
    this.plinkos = {};
    this.lastParticleId = 0;
    this.isRunning = false;
    this.createEnvironment();
    return this;
  }



  startGame = () => {
    Engine.run(this.engine);
  }

  // onCollisionStart = (event) => {
  //   const pairs = event.pairs;

  //   for (let i = 0; i < pairs.length; i++) {
  //     const pair = pairs[i];
  //     const bodyA = pair.bodyA;
  //     const bodyB = pair.bodyB;

  //     if (bodyB.label === 'particle') {

  //     }
  //   }
  // }


  _createParticle=async()=> {
    const id = this.lastParticleId++ %255;
    const x = Math.floor(Math.random() * (400 - 350 + 1)) + 350;
    const y = 16.72686230248307;
    let particle = new Particle({ id, x, y });
    particle.recentlyDropped = true;
    this.particles[String(id)] = particle;
    await particle.addToEngine(this.engine.world);
    await Engine.update(this.engine, this.props.TIMESTEP);
    let checkParticleStatus = setInterval(() => {
      this.engine.world.bodies.forEach(dt => {
        if (dt.label === 'particle' && dt.position.y > this.props.CANVAS_HEIGHT - 5 - (this.props.PARTICLE.DIAMETER) / 2) {
          const particle = dt.parentObject
          World.remove(this.engine.world, particle.body)
          let checkParticle = this.engine.world.bodies.filter(el => el.label === 'particle')
          console.log(checkParticle.length)
          setTimeout(() => {
            if (checkParticle.length === 0) {
              clearInterval(checkParticleStatus)
            }
          }, 10);
        }
      })

    }, this.props.TIMESTEP);
  

  }
  _createPlinkos() {
    let ROW_SPACING = this.props.CANVAS_HEIGHT / this.props.ROWS * this.props.ROW_ADJUSTMENT;
    let COL_SPACING = this.props.CANVAS_WIDTH / (this.props.ROWS + 2) * this.props.COL_ADJUSTMENT;
    const VERTICAL_MARGIN = ROW_SPACING * 1.5;
    const HORIZONTAL_OFFSET = COL_SPACING / 2;
    let id = 0;
    let row = 2
    for (row; row < this.props.ROWS + 2; row++) {
      let differ = (((this.props.ROWS + 2) - row) * HORIZONTAL_OFFSET) + this.props.COL_ADJUSTMENT * ((this.props.ROWS + 2) * 5)

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

  createEnvironment() {
    this._createPlinkos();
  }
  render() {
    return (
      <>
      <div ref={this.canvasRef}/>
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
      </>
    )
  }

}
