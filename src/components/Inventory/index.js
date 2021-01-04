import React, { useState } from 'react';
import './styles.scss';
import InventoryItem from '../InventoryItem';

export default function Inventory() {
  const [ inventoryItems, setInventoryItems ] = useState([
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
  const createItem = (newItem) => {
    setInventoryItems([...inventoryItems, newItem]);
  };
  const editItem = (editedItem) => {
    const newInventoryItems = inventoryItems.map(invItem => {
      return editedItem.id === invItem.id ? editedItem : invItem;
    });

    setInventoryItems(newInventoryItems);
  };
  const removeItem = (itemId) => {
    setInventoryItems(inventoryItems.filter(invItem => itemId !== invItem.id));
  };
  const inventoryItemsJSX = inventoryItems.length ? (
    inventoryItems.map(item => {
      return (
        <InventoryItem key={ item.id } item={ item } editItem={ editItem } removeItem={ removeItem } />
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