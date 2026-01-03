import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImageCard from '../components/ImageCard';

const PublicProfile = () => {
  const {username} = useParams();
  const {images} = useSelector((state) => state.images);
  const userImages = images.filter((img) => img.username === username);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{username}'s Profile</h1>
      <div className="grid grid-cols-3 gap-4">
        {userImages.map((img) => <ImageCard key={img.id} image={img} />)}
      </div>
    </div>
  )
}

export default PublicProfile
