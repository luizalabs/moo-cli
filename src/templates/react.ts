import reactComp from './react/comp.js';
import reactFuncComp from './react/func.js';
import reactTest from './react/test.js';

export default function reactTemplate(type: string) {
  switch (type) {
    case 'test':
      return reactTest;

    case 'func':
      return reactFuncComp;

    default:
      return reactComp;
  }
}
