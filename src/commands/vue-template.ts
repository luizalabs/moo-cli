import vueComp from '../templates/vue/comp';
import vueTest from '../templates/vue/test';

export const getTemplate = (type: string) => {
  if (type === 'comp') {
    return vueComp;
  }
  return vueTest;
};

export default getTemplate;
