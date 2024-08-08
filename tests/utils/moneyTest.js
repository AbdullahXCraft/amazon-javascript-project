import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });
  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
  it('round up when needed', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
  it('round down when needed', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
  it('handles a lot of decimal digits', () => {
    expect(formatCurrency(1312.99999)).toEqual('13.13');
  });
  it('handles negative numbers', () => {
    expect(formatCurrency(-799)).toEqual('-7.99');
  });
});