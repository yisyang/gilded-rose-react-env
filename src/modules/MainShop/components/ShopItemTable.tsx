import React from 'react';
import { Table } from 'react-bootstrap';
import { ShopItem } from '../../../types';

type ShopItemTableProps = {
  items: ShopItem[]
};

function getItemRows(items: ShopItem[]) {
  return items.map((item: ShopItem) => (
    <tr key={item.sku} className="item-row">
      <td>{item.name}</td>
      <td>{item.quality || 0}</td>
      <td>{item.sellIn || 0}</td>
    </tr>
  ));
}

function ShopItemTable(props: ShopItemTableProps) {
  const { items } = props;

  if (items.length === 0) {
    return (
      <div>
        No items found. Please check other sections.
      </div>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quality</th>
          <th>Sell In Days</th>
        </tr>
      </thead>
      <tbody>
        {getItemRows(items)}
      </tbody>
    </Table>
  );
}

export default ShopItemTable;
