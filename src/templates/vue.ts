import vueComp from './vue/comp';
import vueTSComp from './vue/compTS';
import vueTest from './vue/test';

export default function vueTemplate(type: string, typescript: boolean = false) {
  if (type === 'test') {
    return vueTest;
  }
  return typescript ? vueTSComp : vueComp;
}
