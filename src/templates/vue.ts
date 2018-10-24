import vueComp from './vue/components/comp';
import vueTSComp from './vue/components/compTS';
import vueAction from './vue/flux/action';
import vueTSAction from './vue/flux/actionTS';
import vueReducer from './vue/flux/reducer';
import vueTSReducer from './vue/flux/reducerTS';
import vueTest from './vue/test';

export function vueFluxTemplate(type: string, ts: boolean = false) {
  if (type === 'action') {
    return ts ? vueTSAction : vueAction;
  }
  return ts ? vueTSReducer : vueReducer;
}

export default function vueTemplate(type: string, ts: boolean = false) {
  if (type === 'test') {
    return vueTest;
  }
  return ts ? vueTSComp : vueComp;
}
