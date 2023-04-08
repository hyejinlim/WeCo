import * as R from 'ramda';
const labelFromValue = (value: any, list: any) => {
  return R.pipe(R.find(R.propEq('value', value)), R.prop('label'))(list);
};

export { labelFromValue };
