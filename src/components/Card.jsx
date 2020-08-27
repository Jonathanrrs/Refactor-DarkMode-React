import React from 'react';
import '../card.css';

function Card({username, followers, todayFollowers, icon}) {
    return (
        <article className="card facebook">
            <p className="card-title">
                <img alt="" src={icon}></img>
                {username}
            </p>
            <p className="card-followers">
    <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img alt="" src="./images/up.png"></img>
                {todayFollowers} Today
            </p>
        </article>
    )
}

export default Card;