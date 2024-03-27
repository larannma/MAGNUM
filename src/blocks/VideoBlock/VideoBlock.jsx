import React, { useState } from 'react';
import './VideoBlock.css'


const ImageWithVideoOnHover = ({imageUrl, videoUrl}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='interactiveVideo'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video className='interactiveVideo__item'  src={videoUrl} autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <img className='interactiveVideo__image' src={imageUrl} alt="Hover to play video" />
          <div className='interactiveVideo__overlay'><div className='interactiveVideo__subtitle'><p className='interactiveVideo__project-name'>Золотые хиты</p><p className='interactiveVideo__project-hash'>#концерт #CG</p></div></div>
        </>
      )}
    </div>
  );
};

export default ImageWithVideoOnHover;
