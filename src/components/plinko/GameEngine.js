import { World, Engine} from 'matter-js';
import {
  ROWS,
  COLS,
  ROW_SPACING,
  COL_SPACING,
  VERTICAL_MARGIN,
  HORIZONTAL_OFFSET,
  COL_ADJUSTMENT,
  CANVAS
} from './constants/canvas';
import Plinko from './game/plinko';
import Particle from './game/particle';
import { TIMESTEP } from './constants/game';
import { PARTICLE } from './constants/bodies';

export default class GameEngine {
  constructor() {
    this.engine = Engine.create(document.getElementById('techvr'));
    this.engine.render.canvas.width=CANVAS.WIDTH;
    this.engine.render.canvas.height=CANVAS.HEIGHT;
    this.engine.render.options.wireframes=false;
    this.engine.render.options.background=CANVAS.FILL ;
    this.engine.world.gravity.y=1;
  }

  init() {
    this.particles = {};
    this.plinkos = {};
    this.lastParticleId = 0;
    this.isRunning = false;
    this.createEnvironment();
    return this;
  }



  startGame() {
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


  _createParticle() {
    const id = this.lastParticleId++ % 255;
    const x = Math.floor(Math.random() * (400 - 350 + 1) ) + 350;
    const y = 16.72686230248307;
    let particle = new Particle({ id, x, y });
    particle.recentlyDropped = true;
    this.particles[String(id)] = particle;
    particle.addToEngine(this.engine.world);
    Engine.update(this.engine, TIMESTEP);
    let checkParticleStatus = setInterval(() => {
      this.engine.world.bodies.forEach(dt=>{
        if(dt.label==='particle' && dt.position.y > CANVAS.HEIGHT - 5 - (PARTICLE.DIAMETER)/2){
         const particle = dt.parentObject
        World.remove(this.engine.world,particle.body)
        let checkParticle=this.engine.world.bodies.filter(el=>el.label==='particle')
        setTimeout(() => {
          if(checkParticle.length === 0){
            clearInterval(checkParticleStatus)
          }
        }, 10);          
        }
      })   
     
    }, TIMESTEP);
   
  }
  _createPlinkos() {
    let id = 0;
    let row = 2
    for (row; row < ROWS + 2; row++) {
      let differ = ((COLS - row) * HORIZONTAL_OFFSET) + COL_ADJUSTMENT * (COLS * 5)

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
}
