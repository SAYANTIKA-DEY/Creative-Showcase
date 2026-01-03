import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteImage } from '../features/images/imageSlice';

const ImageCard = ({image, showDelete}) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded p-2">
      <img  src={image.url} alt={image.title} className="w-full h-60 object-cover" />
      <p className="mt-2 text-center">{image.title}</p>
      {showDelete && (
      <delete onClick={() => dispatch(deleteImage(image.id))} className="text-red-500">Delete</delete>)}
    </div>
  );
};

export default ImageCard
