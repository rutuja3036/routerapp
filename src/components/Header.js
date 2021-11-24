import React from 'react'

export const Header = () => {
    return (
        <>
            <h1>react router tutorial start</h1>
            <ul classname="nav">
                <li>
                    <Link to ="/Home">Home</Link>
                </li>
                <li>
                    <Link to ="/About">About</Link>
                </li>
                <li>
                    <Link to ="/Profile">Profile</Link>
                </li>
            </ul>
        </>
    );
};