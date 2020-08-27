import React from 'react';
import Card from './Card';


const cardListData = [
    {
        id: 1,
        username: '@Jonathan',
        followers: '1483',
        todayFollowers: 12,
        icon: './images/up.png'
    },
    {
        id: 2,
        username: '@Ramiro',
        followers: '28k',
        todayFollowers: 20,
        icon: './images/tw.png'
    },
    {
        id: 3,
        username: '@Yesenia',
        followers: '6k',
        todayFollowers: 30,
        icon: './images/yt.png'
    },
    {
        id: 4,
        username: '@Iliana',
        followers: '12k',
        todayFollowers: -50,
        icon: './images/ig.png'
    }
]


function TopCardlist() {
    return (
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map((cardData) => <Card key={cardData.id} {...cardData} /* spread operator */ />)
                    }
                </div>
            </div>
        </section>
    )
}

export default TopCardlist;