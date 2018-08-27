import reactComp from './react/comp.js';
import reactTSComp from './react/compTS.js';
import reactFuncComp from './react/func.js';
import reactTSFuncComp from './react/funcTS.js';
import reactTest from './react/test.js';
import reactTSTest from './react/testTS.js';

export default function reactTemplate(type: string, typescript: boolean = false) {
  switch (type) {
    case 'test':
      return typescript ? reactTSTest : reactTest;

    case 'func':
      return typescript ? reactTSFuncComp : reactFuncComp;

    default:
      return typescript ? reactTSComp : reactComp;
  }
}
