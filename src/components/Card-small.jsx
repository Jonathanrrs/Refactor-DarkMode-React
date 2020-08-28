import React from 'react';
import '../css/card-small.css';

function CardSmall({icon, growth, pageViews}) {
    return (
        <div className="card-small">
            <p className="card-small-views">Page Views</p>
            <p className="card-small-icon">
                <img src={icon} alt="" />
            </p>
            <p className="card-small-number">{pageViews}</p>
            <p className="card-small-percentage">
                <span>
                    <img src="./images/up.png" alt="" /> {growth}%
                </span>
            </p>
        </div>
    )
}

export default CardSmall;