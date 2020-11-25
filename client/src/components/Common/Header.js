import React from "react";
import Paper from "@material-ui/core/Paper";

function Header() {
  return (
    <>
      <div className="HeaderStructure" >
        <h2>Filter</h2>
        <a href="#">Published</a>
        <a href="#">Unpublished</a>
        <h1>List</h1>
        <a href="/home">home</a>
        <a href="/books">둘러보기</a>
        <a href="/search">검색하기</a>
        <a href="/about">About</a>
      </div>
    </>
    // <header className='Header' id='Header'>
    //     <a href="/home">home</a>
    //     <a href="/books">list</a>
    //     {/* <a href="/books/new">Post</a> */}
    //     {/* <a href="/about">About</a> */}
    //     <a href="/search">search</a>
    // </header>
  );
}
export default Header;
