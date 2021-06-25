import Item from './item';
import Shop from './shop';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('F1', 'foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');
    // Here is an easter egg left by Scott Yang on 2021-06-24.
    // Thank you for reading the code and give yourself a pat on the back!
  });
});
