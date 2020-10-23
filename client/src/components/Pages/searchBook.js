import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { getListandSet } from "../../utilities";
import { List, Error,Button } from "../Common";

function SearchPage() {
  const [Author, setAuthor] = useState("");
  const [Data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [state, setState] = useState("");
  const SubmitHandler = (e) => {
    setState("loading..");
    e.preventDefault();
    const dbElement = {
      method: "GET",
      url: `http://localhost:3028/books?author=${Author}`,
    };
    getListandSet(dbElement)
      .then((res) => {
        if (res.length > 0) {
          setState("");
          setData(res);
        } else {
          setState("doesn't exist ");
        }
      })
      .catch((err) => setError(err.toString()));
  };
  return (
    <>
      <form onSubmit={SubmitHandler}>
        <input
          value={Author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="검색"
        />
        <Button type={'submit'} value={'검색하기'} />
      </form>
      {state && <p>{state}</p>}
      {Data.length > 0 ? <List obj={Data} /> : null}
      {error && <Error message={error} />}
    </>
  );
}
export default withRouter(SearchPage);
