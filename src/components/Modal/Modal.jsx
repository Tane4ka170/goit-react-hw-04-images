import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ largeImageURL, onClose }) {
  const handleClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={s.overlay} onClick={handleClose}>
      <div className={s.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
