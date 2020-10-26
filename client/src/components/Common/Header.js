import React from 'react';

function Header(){
    return (
        <header className='Header'>
            <a href="/"></a>
            <a href="/books"></a>
            {/* <a href="/books/new">Post</a> */}
            {/* <a href="/about">About</a> */}
            <a href="/search"></a>
        </header>
    )
}
export default Header;