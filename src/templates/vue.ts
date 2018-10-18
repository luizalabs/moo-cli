import vueComp from './vue/components/comp';
import vueTSComp from './vue/components/compTS';
import vueTest from './vue/test';

export default function vueTemplate(type: string, ts: boolean = false) {
  if (type === 'test') {
    return vueTest;
  }
  return ts ? vueTSComp : vueComp;
}
