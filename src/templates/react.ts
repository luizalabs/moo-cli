import reactComp from './react/components/comp.js';
import reactTSComp from './react/components/compTS.js';
import reactFuncComp from './react/components/func.js';
import reactTSFuncComp from './react/components/funcTS.js';
import reactTest from './react/components/test.js';
import reactTSTest from './react/components/testTS.js';

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
