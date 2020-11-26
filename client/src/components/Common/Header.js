import React from "react";
import {Search} from '../Common';

function Header({className, setSearch, searchHandler}) {
  return (
    <>
      <div className={`${className} HeaderStructure`} >
        <h2>Filter</h2>
        <a href="#">Published</a>
        <a href="#">Unpublished</a>
        <h1>List</h1>
        <a href="/home">home</a>
        <a href="/books">둘러보기</a>
        <a href="/about">About</a>
        <Search setSearch={setSearch} searchHandler={searchHandler} />
      </div>
    </>
  );
}
export default Header;
