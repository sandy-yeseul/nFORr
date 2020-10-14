import React from 'react';

function Header(){
    return (
        <header style={{
            width: '70vw', height: 'max-content', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'
        }}>
            <a href="#">HomePage</a>
            <a href="#">List</a>
            <a href="#">Post</a>
            <a href="#">About</a>
            <a href="#">Search</a>
        </header>
    )
}
export default Header;