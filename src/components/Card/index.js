import React from 'react';
import './styles.scss';

export default function Card({ children }) {
  return (
    <div className='card'>
      { children }
    </div>
  )
}