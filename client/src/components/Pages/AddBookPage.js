import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { Form, Header } from "../Common";
import { callDb } from "../../utilities";

function AddBookPage(props) {
  const fields = {
    title: "",
    author: "",
    publisher: "",
    publishDate: "",
    seller: "",
    price: "",
    publishDate: "",
  };
  const handler = (body) => {
    const params = {
      method: "POST",
      url: `http://localhost:3028/books/`,
      body: body,
    };
    callDb(params)
      .then((res) => {
        if (res.status === 201)
          window.location.assign(`/books/${res.data._id}`);
      })
      .catch((err) => alert(err.toString()));
  };
  return (
    <>
      <div className="BodyStructure">
        <Form fields={fields} buttonText="Submit" handler={handler} />
      </div>
      <Header className="HeaderStructure" />
    </>
  );
}
export default withRouter(AddBookPage);
