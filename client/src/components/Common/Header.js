import React from "react";
import { Search } from "../Common";

function Header({ className, setSearch, searchHandler, publishFilterHandler }) {
  return (
    <>
      <div className={`${className} HeaderStructure`}>
        {setSearch && (
          <>
            <h2>Filter</h2>
            <a href="#" onClick={() => publishFilterHandler(true)}>
              Published
            </a>
            <a href="#" onClick={() => publishFilterHandler(false)}>
              Unpublished
            </a>
          </>
        )}
        <h1>List</h1>
        <a href="/home">home</a>
        <a href="/books">둘러보기</a>
        <a href="/about">About</a>
        {setSearch && (
          <Search setSearch={setSearch} searchHandler={searchHandler} />
        )}
      </div>
    </>
  );
}
export default Header;
