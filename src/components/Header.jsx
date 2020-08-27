import React from 'react';
import Switch from './Switch';
import '../header.css';
function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-grid">
                    <div className="div">
                        <h1>Social Media Dashboard</h1>
                        <p className="header-total">Total Followers: 23,004</p>
                    </div>
                <Switch />
                </div>
            </div>
        </header>
    )
}

export default Header;
