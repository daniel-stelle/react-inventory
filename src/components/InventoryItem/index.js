import React, { useState } from 'react';

import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../Card';
import Button from '../Button';
import Modal from '../Modal';

function InventoryItem({ item, editItem, removeItem }) {
  const [ showModal, setShowModal ] = useState(false);
  const [ modalHeader, setModalHeader ] = useState(null);
  const [ modalBody, setModalBody ] = useState(null);
  const [ modalActions, setModalActions ] = useState(null);

  const resetModal = () => {
    setModalHeader(null);
    setModalBody(null);
    setModalActions(null);
  };

  const openEditModal = () => {
    resetModal();

    setModalHeader(`Edit ${item.title}`);
    setModalBody(`Testing edit inventory for item "${item.title}".`);
    setModalActions((
      <>
        <Button action={ () => setShowModal(false) }>
          Cancel
        </Button>
        <Button type="primary" action={ () => setShowModal(false) }>
          Edit Item
        </Button>
      </>
    ));

    setShowModal(true);
  };

  const openConfirmRemoveModal = () => {
    resetModal();

    setModalHeader(`Remove ${item.title}`);
    setModalBody(`Are you sure you want to remove "${item.title}"?`);
    setModalActions(
      <>
        <Button action={ () => setShowModal(false) }>
          Cancel
        </Button>
        <Button type="danger" action={ () => removeItem(item.id) }>
          Remove Item
        </Button>
      </>
    );

    setShowModal(true);
  };

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
        <Button action={ openEditModal }>
          <FontAwesomeIcon icon="edit" />
        </Button>
        <Button action={ openConfirmRemoveModal }>
          <FontAwesomeIcon icon="trash" />
        </Button>
        <Modal show={ showModal } closeModal={ () => setShowModal(false) }
               header={ modalHeader } actions={ modalActions }>
          { modalBody }
        </Modal>
      </div>
    </Card>
  )
}

export default InventoryItem;