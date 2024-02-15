import { BirdsNamesPipe } from './birds-names.pipe';

describe('BirdsNamesPipe', () => {

  it('should apply uppercase if length less than point', () => {
    let pipe = new BirdsNamesPipe();
    expect(pipe.transform('four', 7)).toEqual('FOUR');
  });

  it('should apply uppercase no point passed and length < 5', () => {
    let pipe = new BirdsNamesPipe();
    expect(pipe.transform('four')).toEqual('FOUR');
  });

  it('should make no transformation if length is equal to point', () => {
    let pipe = new BirdsNamesPipe();
    expect(pipe.transform('four', 4)).toEqual('four');
  });

  it('should make no transformation if length is greater than point', () => {
    let pipe = new BirdsNamesPipe();
    expect(pipe.transform('four', 2)).toEqual('four');
  });
});
