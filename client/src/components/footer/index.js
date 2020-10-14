import React from 'react';

function Footer(){
    return (
        <footer style={{
            width: '70vw', height: 'max-content', marginRight: 'auto', marginLeft: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', position: 'absolute', bottom: '0'
        }}>
            <a href="/">HomePage</a>
            <a href="/book">List</a>
            <a href="/book/new">Post</a>
            <a href="/about">About</a>
            <a href="/search">Search</a>
        </footer>
    )
}
export default Footer;