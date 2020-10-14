import React from 'react';

function Header(){
    return (
        <header style={{
            width: '70vw', height: 'max-content', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'
        }}>
            <a href="/">HomePage</a>
            <a href="/book">List</a>
            <a href="/book">Post</a>
            <a href="/about">About</a>
            <a href="/search">Search</a>
        </header>
    )
}
export default Header;