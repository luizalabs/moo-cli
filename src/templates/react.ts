import reactComp from './react/comp.js';
import reactTSComp from './react/compTS.js';
import reactFuncComp from './react/func.js';
import reactTSFuncComp from './react/funcTS.js';
import reactTest from './react/test.js';
import reactTSTest from './react/testTS.js';

export default function reactTemplate(type: string, ts: boolean = false) {
  switch (type) {
    case 'test':
      return ts ? reactTSTest : reactTest;

    case 'func':
      return ts ? reactTSFuncComp : reactFuncComp;

    default:
      return ts ? reactTSComp : reactComp;
  }
}
