import './Portfolio.css';
import ImageWithVideoOnHover from '../VideoBlock/VideoBlock';
import area1_img from '../../img/portfolio/Первоклассный МузОн 2023-min.jpeg'
import area2_img from '../../img/portfolio/Томск_карта-min.png'
import area3_img from '../../img/portfolio/Альфабанк 2022-min.png'
import area4_img from '../../img/portfolio/iri.png'
import area5_img from '../../img/portfolio/MTC.png'
import area6_img from '../../img/portfolio/Золотые хиты Муз-ТВ 2022-min.png'
import area7_img from '../../img/portfolio/Московский URBAN FORUM  2023 (2).png'
import videoUrl1 from '../../videos/noviy-muzon_small.mp4'
import videoUrl2 from '../../videos/tomsk-small.mp4'
import videoUrl3 from '../../videos/alhabank-vertical.mp4'
import videoUrl4 from '../../videos/iri-big.mp4'
import videoUrl5 from '../../videos/mts.mp4'
import videoUrl6 from '../../videos/zolotye hity_small.mp4'
import videoUrl7 from '../../videos/ar vertical.mp4'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Portfolio() {

  const [imageURLs, setImageURLs] = useState({
    'area1': [area1_img, videoUrl1],
    'area2': [area2_img, videoUrl2],
    'area3': [area3_img, videoUrl3],
    'area4': [area4_img, videoUrl4],
    'area5': [area5_img, videoUrl5],
    'area6': [area6_img, videoUrl6],
    'area7': [area7_img, videoUrl7]
  })

  const handleClick = (area) => {
    const imageUrl = imageURLs[area]
    window.location.href = `/portfolio/${area}`;
  }

  return (
    <div className="portfolio">
      <div className="container">
        {Object.entries(imageURLs).map(([area, imageUrl]) => {
          console.log(area, imageUrl)
          return(<div onClick={() => handleClick(area)} key={area} className={`portfolio__item ${area} area`}>
            <ImageWithVideoOnHover imageUrl={imageUrl[0]} videoUrl={imageUrl[1]} />
          </div>)
        }
        )}
      </div>
    </div>
  );
}

export default Portfolio;