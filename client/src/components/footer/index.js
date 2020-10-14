import React from 'react';

function Header(){
    return (
        <footer style={{
            width: '70vw', height: 'max-content', marginRight: 'auto', marginLeft: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', position: 'absolute', bottom: '0'
        }}>
            <a href="#">HomePage</a>
            <a href="#">List</a>
            <a href="#">Post</a>
            <a href="#">About</a>
            <a href="#">Search</a>
        </footer>
    )
}
export default Header;