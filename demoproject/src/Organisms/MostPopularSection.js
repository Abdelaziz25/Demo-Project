import React, { useState } from 'react';
import './MostPopularSection.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rectangle67 from '../images/Path 583.png';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const MostPopularSection = () => {
    const [isBookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!isBookmarked);
  };
  return (
    <div className="most-popular-section">
       <div className="most-popular-text">
        Most Popular
      </div>
      <div className="secondary-text">
        Learn the latest skills to reach your<br/> professional goals
      </div>
      <div className="icon-container">
        <ArrowBackIosIcon className="back-icon" />
      </div>
      <div className="icon2-container">
        <ArrowForwardIosIcon className="back-icon" />
      </div>
      <div className="white-box">
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
  <img src={Rectangle67} alt="Your Alt Text" />
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
        <button className="custom-button">Enroll Now</button>
        <button className="cart-button">
            <ShoppingCartIcon className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default MostPopularSection;