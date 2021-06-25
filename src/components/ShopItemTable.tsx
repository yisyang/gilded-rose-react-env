import React from 'react';
import Table from 'react-bootstrap/Table';
import { map } from 'lodash';

export interface Item {
  sku: string;
  name: string;
  sellIn?: number;
  quality?: number;
}

interface ShopItemTableProps {
  items: Item[]
}

function getItemRows(items: Item[]) {
  return map(items, (item: Item) => (
    <tr key="{item.sku}" className="item-row">
      <td>{item.name}</td>
      <td>{item.quality || 0}</td>
      <td>{item.sellIn || 0}</td>
    </tr>
  ));
}

function ShopItemTable(props: ShopItemTableProps) {
  const { items } = props;

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
