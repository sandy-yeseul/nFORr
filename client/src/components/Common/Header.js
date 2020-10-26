import React from 'react';

function Header(){
    return (
        <header className='Header' id='Header'>
            <a href="/home">home</a>
            <a href="/books">list</a>
            {/* <a href="/books/new">Post</a> */}
            {/* <a href="/about">About</a> */}
            <a href="/search">search</a>
        </header>
    )
}
export default Header;