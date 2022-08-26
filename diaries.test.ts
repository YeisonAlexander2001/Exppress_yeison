import * as ds from './src/services/diaryServices'
console.log(ds);
describe('test de FindByid', () => {
  test('test de FindByid', () => {
    expect(ds.findById(5)).toBe([]);
  });
});