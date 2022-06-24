import { formatRating } from './store-util-formatters';

describe('storeUtilFormatters', () => {
  it('should work', () => {
    expect(formatRating(0.24557923269492465)).toEqual('2.4 / 10');
  });
});
