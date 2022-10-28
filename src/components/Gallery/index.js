import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/large/projects/my-own-library.png';

function Gallery(props) {
    const currentCategory = {
        name: "project",
        description: "Photo of my own library web application"
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img src={photo} alt="my own library web application" className="img-thumbnail mx-1" />
            </div>
        </section>
    );
}

export default Gallery;