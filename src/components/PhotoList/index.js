import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    // add images of future projects here 
    {
      name: 'My Own Library',
      category: 'portfolio',
      description: 'A web application able to make a list of your favorite books and movies so that you can always refer back to it later.',
    },
    {
      name: "Arturo's Resume",
      category: "resume",
      description: "A photo of Arturo's Resume."
    }
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/large/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;