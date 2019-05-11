import React from 'react';
import ImageCard from './ImageCard';

const imageList = (props) => {
  const images = props.images.map(({description, id, urls})=> {
    return <ImageCard 
              description={description} 
              key={id}
              src={urls.regular}
            />;
  });
  return <div className="image-list">{images}</div>;
}

export default imageList;