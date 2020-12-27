import React, { useState } from 'react';
import './styles.scss';
import InventoryItem from '../InventoryItem';

export default function Inventory() {
  const [ inventoryItems ] = useState([
    {
      id: 1,
      title: "Onions",
      store: "Brookshires",
      stock: 2,
      desired: 2
    },
    {
      id: 2,
      title: "Bananas",
      store: "Brookshires",
      stock: 1,
      desired: 4
    },
    {
      id: 3,
      title: "Renew Body Wash",
      store: "Melaleuca",
      stock: 1,
      desired: 3
    }
  ]);
  const inventoryItemsJSX = inventoryItems.length ? (
    inventoryItems.map(item => {
      return (
        <InventoryItem item={ item }></InventoryItem>
      );
    })
  ) : (
    <div>No items yet</div>
  );


  return (
    <div className="inventory">
      <h1>Inventory</h1>
      { inventoryItemsJSX }
    </div>
  );
}