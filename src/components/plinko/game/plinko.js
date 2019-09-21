import { Body, Bodies } from 'matter-js';
import {PLINKO} from '../constants/bodies';
import GameObject from './GameObject';
export default class Plinko extends GameObject {
  constructor({ id, x, y }) {
    super({ id, x, y });
    this.type = 'plinko';
    this.createPhysics();
    this.body.parentObject = this;
  }
  createPhysics() {
    let options = {
      friction: PLINKO.FRICTION,
      restitution: PLINKO.RESTITUTION,
    }

    this.body = Bodies.circle(this.x, this.y, PLINKO.RADIUS, options);
    Body.setDensity(this.body, 1)
    this.body.isStatic = true;
    this.body.position.x = this.x;
    this.body.position.y = this.y;
    this.body.label = this.type;
    this.body.isShrinking = true;
    this.body.render.strokeStyle = "hsla(0, 0%, 100%, 0.2)"
    this.body.render.fillStyle = PLINKO.FILL;
  }
 
}
