import reactComp from '../templates/react/comp.js';
import reactFuncComp from '../templates/react/func.js';
import reactTest from '../templates/react/test.js';

export const getTemplate = (type: string) => {
  return type === 'comp'
    ? reactComp
    : type === 'test'
      ? reactFuncComp
      : reactTest;
};

export default getTemplate;
