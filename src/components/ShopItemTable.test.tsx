import React from 'react';
import { shallow } from 'enzyme';
import ShopItemTable from './ShopItemTable';

describe('ShopItemTable', () => {
  it('renders learn react link', () => {
    const items = [
      {
        sku: 'F1',
        name: 'Foo',
      },
    ];
    const subject = shallow(<ShopItemTable items={items} />);
    const header = subject.find('.item-row');
    expect(header.length).toBe(1);
  });
});
