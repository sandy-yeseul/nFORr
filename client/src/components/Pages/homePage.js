import React from "react";
import { withRouter } from "react-router-dom";
import { Header } from "../Common";

function homePage(props) {
  return (
    <>
      <div className="BodyStructure">hi</div>
      <Header />
    </>
  );
}

export default withRouter(homePage);
