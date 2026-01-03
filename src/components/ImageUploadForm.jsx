import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addImage } from '../features/images/imageSlice';
import { v4 as uuidv4 } from 'uuid';

const ImageUploadForm = ({currentUser}) => {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url) return;
    
    dispatch(addImage({
        id: uuidv4(),
        title,
        url,
        username: currentUser.username,
    }));

    setTitle('');
    setUrl('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input
          type="text"
          placeholder="Image Title..."
          value={title}
          onChange={(e) =>setTitle(e.target.value)}
          className="border p-2"
        />
        <input
           type="text"
           placeholder='Image URL...'
           value={url}
           onChange={(e) => setUrl(e.target.value)}
           className='border p-2'
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Upload</button>
      </form>
    </div>
  )
}

export default ImageUploadForm
