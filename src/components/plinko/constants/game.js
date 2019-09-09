import { VERTICAL_MARGIN } from './canvas';
import { PARTICLE, PLINKO } from './bodies';

export const MS_IN_SECOND = 2000;
export const FPS = 60;
export const TIMESTEP = MS_IN_SECOND / FPS;
export const DROP_BOUNDARY = VERTICAL_MARGIN - PARTICLE.RADIUS - PLINKO.RADIUS;
