import React from 'react';
import './styles.scss';
import Card from '../Card';

function InventoryItem({ item }) {
  return (
    <Card key={ item.id }>
      <div className="title">
        <span>{ item.title }</span>
        <span>{ item.stock }/{ item.desired }</span>
      </div>
      <div className="store">
        <span>{ item.store }</span>
      </div>
    </Card>
  )
}

export default InventoryItem;