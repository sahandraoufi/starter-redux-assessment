import { useSelector, useDispatch } from 'react-redux';
import {
  removePhoto,
  selectFilteredPhotos,
  // Task 13: Import the `selectFilteredPhotos()` selector from the photos slice
} from '../photos.slice';
import './list.css';

export default function PhotosList() {
  // Task 14: Call `useSelector()` below with `selectFilteredPhotos` instead of `selectAllPhotos`
  const photos = useSelector(selectFilteredPhotos);
  const dispatch = useDispatch();

  function handleDeleteButtonClick(id) {
    dispatch(removePhoto(id));
  }

  const photosListItems = photos.map((photo) => (
    <li key={`photo-${photo.id}`}>
      <img alt={photo.caption} src={photo.imageUrl} />
      <div>
        <p>{photo.caption}</p>
        <button
          data-testid={`${photo.caption}-button`}
          onClick={() => handleDeleteButtonClick(photo.id)}>
          Delete
        </button>
      </div>
    </li>
  ));

  return photosListItems.length > 0 ? (
    <ul>{photosListItems}</ul>
  ) : (
    <h3>No doggies to display...</h3>
  );
}
