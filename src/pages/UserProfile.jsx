import React from "react";
import {useSelector} from "react-redux";
import ImageCard from '../components/ImageCard';
import ImageUploadForm from '../components/ImageUploadForm';

const UserProfile = () => {
  const {user} = useSelector((state) => state.auth);
  const {images} = useSelector((state) => state.images);

  if (!user) {
    return <p>Please login first</p>;
  }


  const userImages = images.filter((img) => img.username === user.username);

  return (
    <div className="p-4">
      <h2>Welcome, {user.username}</h2>
      <ImageUploadForm currentUser={user} />
      <h3 className="mt-6 text-xl">Your Images:</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {userImages.map((img) => <ImageCard key={img.id} image={img} showDelete={true}/>)}
      </div>
    </div>
  );
};

export default UserProfile;
