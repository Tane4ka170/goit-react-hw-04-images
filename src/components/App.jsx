import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Spinner from './Loader/Loader';
import api from '../Helpers/api';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchImages = () => {
      setIsLoading(true);
      api
        .fetchImages(query, page)
        .then(response => {
          setImages(prevImages => [...prevImages, ...response.data.hits]);
          setIsLoading(false);
          setTotalResults(response.data.totalHits);
        })
        .catch(error => {
          console.error('Error fetching images:', error);
          setIsLoading(false);
        });
    };

    if (query !== '') {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = newLargeImageURL => {
    setShowModal(!showModal);
    setLargeImageURL(newLargeImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onImageClick={handleImageClick}
          />
        ))}
      </ImageGallery>
      {isLoading && <Spinner />}
      {images.length > 0 && images.length < totalResults && !isLoading && (
        <Button onClick={handleLoadMore} />
      )}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
