import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.scss';

export default function Modal({ show, setShowModal, children }) {
  if (show) {
    return (
      <div className="modal">
        <div className="modal-main">
          <h2>Modal Window</h2>
          <FontAwesomeIcon icon="times" className="close-icon" onClick={ () => setShowModal(false) } />
          <div className="content">
            { children }
          </div>
          <div className="actions">
            <button onClick={ () => setShowModal(false) }>Close</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}