import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.scss';

// class Modal extends React.Component {
//   static Title = props => {
//     return (
//       <div className="modal-header">
//         <h2>{ props.children }</h2>
//         <FontAwesomeIcon icon="times" className="close-icon" onClick={ props.closeModal } />
//       </div>
//     );
//   };
//   static Body = props => {
//     return (
//       <div className="modal-body">
//         { props.children }
//       </div>
//     );
//   };
//   static Actions = props => {
//     return (
//       <div className="actions">
//         <button onClick={ props.closeModal }>Close</button>
//       </div>
//     );
//   }

//   renderChildren() {
//     return React.Children.map(this.props.children, child => {
//       return React.cloneElement(child, this.props);
//     });
//   }

//   render() {
//     if (this.props.show) {
//       return (
//         <div className="modal">
//           <div className="modal-main">
//             { this.renderChildren() }
//           </div>
//         </div>
//       );
//     } else {
//       return null;
//     }
//   }
// }

// export default Modal;

export default function Modal({ show, closeModal, children }) {
  if (show) {
    return (
      <div className="modal">
        <div className="modal-main">
          <h2>Modal Window</h2>
          <FontAwesomeIcon icon="times" className="close-icon" onClick={ closeModal } />
          <div className="content">
            { children }
          </div>
          <div className="actions">
            <button className="btn btn-primary" onClick={ closeModal }>Close</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}