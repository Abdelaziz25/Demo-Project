import React, { useState } from 'react';
import './LargeCard.css';
import Rectangle67 from '../../../images/Rectangle 67.png';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const LargeCard = ({ title, instructors, description, rating }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkToggle = () => {
        setIsBookmarked((prev) => !prev);
    };

    // Check if title and instructors are provided, if not, use default values
    if (!title && !instructors) {
        title = " User Experience Design Essential";
        instructors = ["Melvin Owens", "Roberts Andrei","Jose Portila…"];
        description = " Lorem ipsum dolor sit amet,";
        rating = 4.7;
    }
    const limitedDescription = description.split(' ').slice(0, 20).join(' ');
    return (
        <div className={`card ${isBookmarked ? 'bookmarked' : ''}`}>
            <div className="bookmark-container" onClick={handleBookmarkToggle}>
                <div className="bookmark">
                    <BookmarkIcon
                        style={{ color: isBookmarked ? '#28A19C' : 'white' }}
                    />
                </div>
            </div>
            <img
                src={Rectangle67}
                alt="Card Image2"
                className="card-image"
            />
            <div className="card-text">
                {title}
            </div>
            <div className="rating-container">
                <span className="rating-value">{rating}</span>
                <div className="rating-stars">
                    <StarIcon style={{ color: '#F7B52E', width: '13px', height: '12.19px' }} />
                    <StarIcon style={{ color: '#F7B52E', width: '13px', height: '12.19px' }} />
                    <StarIcon style={{ color: '#F7B52E', width: '13px', height: '12.19px' }} />
                    <StarIcon style={{ color: '#F7B52E', width: '13px', height: '12.19px' }} />
                    <StarHalfIcon style={{ color: '#F7B52E', width: '13px', height: '12.19px' }} />
                </div>
                <span className="total-ratings">{'{1.988}'}</span>
            </div>
            <div className="instructors-text">
                {instructors.join(', ')}
            </div>
            <div className="course-content">
                <p className="course-text">
                    <span className="course-text-inner">
                        {limitedDescription}
                    </span>
                    <span className="see-more">... See More</span>
                </p>
            </div>
            <div className="price-container">
                <span className="price">
                    $ 17.99
                </span>
                <span className="old-price">
                    $ 40.99
                </span>
            </div>

            <div className="buttons-container">
                <button className="enroll-button">
                    <span className="enroll-text">Enroll Now</span>
                </button>
                <button className="cart-button">
                    <ShoppingCartIcon className="cart-icon" />
                </button>
            </div>
        </div>
    );
};

export default LargeCard;