import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { Form, Header } from "../Common";
import { callDb } from "../../utilities";

function UpdateBookPage(props) {
  const id = useParams().bookId;
  const [fields, setFields] = useState({});
  useEffect(() => {
    const params = {
      method: "GET",
      url: `http://localhost:3028/books/${id}`,
    };
    callDb(params)
      .then((res) => {
        const fieldValues = {
          title: res.data.title,
          author: res.data.author,
          publisher: res.data.publisher,
          publishDate: res.data.publishDate,
          seller: res.data.seller,
          price: res.data.price,
          publishDate: res.data.publishDate,
        };
        setFields(fieldValues);
      })
      .catch((err) => alert(err));
  }, [id]);
  const handler = (body) => {
    const params = {
      method: "PUT",
      url: `http://localhost:3028/books/${id}`,
      body: body,
    };
    callDb(params)
      .then((res) => {
        if (res.status === 201) window.location.assign(`/books/${id}`);
      })
      .catch((err) => alert(err.toString()));
  };
  return (
    <>
      <div className="BodyStructure">
        {Object.keys(fields).length > 0 && (
          <Form fields={fields} buttonText="Submit" handler={handler} />
        )}
      </div>
      <Header className="HeaderStructure" />
    </>
  );
}
export default withRouter(UpdateBookPage);
