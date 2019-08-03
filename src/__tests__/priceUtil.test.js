import { formatPrice, parsePrice } from '../lib/priceUtil';


describe('priceUtil Function', () => {
  it('works with fractional dollars', () => {
    expect(formatPrice(1)).toEqual('$0.01');
    expect(formatPrice(10)).toEqual('$0.10');
    expect(formatPrice(9)).toEqual('$0.09');
    expect(formatPrice(40)).toEqual('$0.40');
  });
  it('works with whole and fractional dollars', () => {
    expect(formatPrice(5012)).toEqual('$50.12');
    expect(formatPrice(101)).toEqual('$1.01');
    expect(formatPrice(110)).toEqual('$1.10');
    expect(formatPrice(20893749823749823749)).toEqual('$208,937,498,237,498,240.00');
  });
});

describe('parsePrice Function', () => {
  it('works with fractional dollars', () => {
    expect(parsePrice('$1.00')).toEqual(100);
  });
  it('works without fractional part', () => {
    expect(parsePrice('$1')).toEqual(100);
  });
});
