import React from 'react'
import { useSelector } from 'react-redux'
import ImageCard from '../components/ImageCard';

const Landing = () => {

  const {images} = useSelector((state) => state.images);
  const randomImage = [...images].sort(()=> 0.5 - Math.random()).slice(0,10);

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {randomImage.map((img) => (
        <ImageCard key={img.id} image={img} showDelete={false}/>
      ))}
    </div>
  )
}

export default Landing
