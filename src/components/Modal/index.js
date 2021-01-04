import React from 'react';

import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ show, closeModal, header, actions, children }) {
  if (show) {
    return (
      <div className="modal">
        <div className="modal-main">
          <h2>{ header }</h2>
          <FontAwesomeIcon icon="times" className="close-icon" onClick={ closeModal } />
          <div className="content">
            { children }
          </div>
          <div className="actions">
            { actions }
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}