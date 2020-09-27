import * as seedrandom from 'seedrandom';

export const random = seedrandom(__dirname);

export const getRandomArbitrary = (min: number, max: number): number =>
  random() * (max - min) + min;