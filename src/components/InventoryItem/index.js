import React, { useState } from 'react';
import './styles.scss';
import Card from '../Card';
import Modal from '../Modal';

function InventoryItem({ item }) {
  const [ showModal, setShowModal ] = useState(false);
  const modalHeader = `Edit ${item.title}`;

  return (
    <Card key={ item.id }>
      <div className="inventory-item">
        <div className="store">
          <span>{ item.store }</span>
        </div>
        <div className="title">
          <span>{ item.title }</span>
          <span>{ item.stock }/{ item.desired }</span>
        </div>
        <button onClick={ () => setShowModal(true) }>Test Modal</button>
        <Modal show={ showModal } closeModal={ () => setShowModal(false) } header={ modalHeader }>
          Testing edit inventory for item with ID {item.id}.
        </Modal>
      </div>
    </Card>
  )
}

export default InventoryItem;