import React from 'react';

function TopCardlist() {
    return (
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    <article className="card facebook">
                        <p className="card-title">
                            <img src="./images/fb.png"></img>
                        @jonathan
                    </p>
                        <p className="card-followers">
                            <span className="card-followers-number">6k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="./images/up.png"></img>
                        12 Today
                    </p>
                    </article>
                    <article className="card twitter">
                        <p className="card-title">
                            <img src="./images/tw.png"></img>
                        @jonathan
                    </p>
                        <p className="card-followers">
                            <span className="card-followers-number">28k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="./images/up.png"></img>
                        12 Today
                    </p>
                    </article>
                    <article className="card instagram">
                        <p className="card-title">
                            <img src="./images/ig.png"></img>
                        @jonathan
                    </p>
                        <p className="card-followers">
                            <span className="card-followers-number">11k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="./images/up.png"></img>
                        12 Today
                    </p>
                    </article>
                    <article className="card youtube">
                        <p className="card-title">
                            <img src="./images/yt.png"></img>
                        @jonathan
                    </p>
                        <p className="card-followers">
                            <span className="card-followers-number">12k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="./images/up.png"></img>
                        12 Today
                    </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default TopCardlist;