import React from 'react';

function Header(){
    return (
        <header className='Header'>
            <a href="/">HomePage</a>
            <a href="/books">List</a>
            {/* <a href="/books/new">Post</a> */}
            {/* <a href="/about">About</a> */}
            <a href="/search">search</a>
        </header>
    )
}
export default Header;