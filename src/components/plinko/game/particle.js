import { Bodies,Body } from 'matter-js';
import GameObject from './GameObject';
import {PARTICLE} from '../constants/bodies';

export default class Particle extends GameObject {
  static count = 0;
  static fillStyles = ['solid'];

  constructor({ id, x, y }) {
    super({ id, x, y });
    this.type = 'particle';  
    this.diameter = PARTICLE.DIAMETER;
    this.fillStyle = Particle.fillStyles[Math.floor(Math.random() * Particle.fillStyles.length)];
    this.angle = 0; // stored in radians  
    this.createPhysics();    
    this.body.parentObject = this;
    Particle.count++;
  }

  createPhysics() {
    const options = {
      restitution: PARTICLE.RESTITUTION,
      friction: PARTICLE.FRICTION
    }

    this.body = Bodies.circle(this.x, this.y, PARTICLE.RADIUS, options);
    this.area = this.body.area;
    Body.setDensity(this.body, PARTICLE.DENSITY)
    this.body.label = this.type;
    this.body.position.x = this.x;
    this.body.position.y = this.y;
    this.body.render.fillStyle = PARTICLE.FILL;
  }


}
