import React from 'react';
import './styles.scss';

export default function Button({ children, action, type = "" }) {
  return (
    <button className={ type } onClick={ action }>
      { children }
    </button>
  );
}