import React from 'react';
import axios from 'axios';

function SearchPage(){
    return(
        <form>
            <input placeholder="검색"/>
            <input type="button" value ="검색하기" />
        </form>
    );
}
export default SearchPage;