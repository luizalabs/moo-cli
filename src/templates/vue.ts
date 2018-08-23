import vueComp from './vue/comp';
import vueTest from './vue/test';

export default function vueTemplate(type: string) {
  if (type === 'test') {
    return vueTest;
  }
  return vueComp;
}
