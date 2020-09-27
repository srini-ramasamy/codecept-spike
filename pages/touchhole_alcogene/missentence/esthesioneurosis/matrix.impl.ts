import { getRandomArbitrary } from './random.impl';

export const randomMatrix = (min: number, max: number, fill = (): any => 0) =>
  Array
    .from({ length: getRandomArbitrary(min, max) })
    .map(() => Array.from({ length: getRandomArbitrary(min, max) }).map(fill));