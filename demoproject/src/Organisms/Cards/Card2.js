import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './Card.css';
const Card2 = ({ image, top, left }) => {
    const [isBookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!isBookmarked);
  };
  return (
    <div className="white-box" style={{ top, left }}>
    <div className="image-container">
    <div
  className="oval-container"
  style={{ backgroundColor: isBookmarked ? '#ffff' : 'grey' }}
>
  <BookmarkIcon
    style={{ color: isBookmarked ? '#28A19C' : '#ffff' }}
    onClick={handleBookmarkClick}
  />
</div>
<img src={image} alt="Your Alt Text" />
</div>
    <div className="big-data-text">
      <p>Big Data, and Machine Learning <br/> on GCP by Google Cloud </p>
      </div>
    <div className="rating-container">
        <p className="rating-text">4.7</p>
        <div className="star-container">
          <StarIcon className="star-icon" />
          <StarIcon className="star-icon" />
          <StarIcon className="star-icon" />
          <StarIcon className="star-icon" />
          <StarHalfIcon className="half-star-icon" />
          <p className="additional-text">{'{1.988}'}</p>
        </div>
        
      </div>
      <div className="additional-info">
              <p className="names-text">Melvin Owens, Roberts Andrei, Jose Portila…</p>
      </div>
      <div className="additional2-info">
          <p className="names-text">Lorem ipsum dolor sit amet,<br/> consetetur sadipscing elitr, sedi</p>
      </div>
      <div className="additional3-info">
          <p className="names-text">… See More</p>
      </div>
      <div className="money-info">
          <p className="names-text">$ 17.99</p>
      </div>
      <div className="moneydash-info">
          <p className="moneydash-text">$ 40.99</p>
      </div>
      <div className="line"></div>
      <button className="custom3-button">Enroll Now</button>
    </div>
  );
};

export default Card2;