import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => {
  const handleClick = () => {
    onImageClick(largeImageURL);
  };
  return (
    <li className={s.galleryItem} onClick={handleClick}>
      <img
        src={webformatURL}
        alt=""
        data-large={largeImageURL}
        className={s.galleryImg}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
