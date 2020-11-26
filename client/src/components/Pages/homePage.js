import React from "react";
import { withRouter } from "react-router-dom";
import { Header } from "../Common";

function homePage(props) {
  return (
    <>
      <div className="BodyAnimation BodyStructure">Hi</div>
      <Header className="HeaderAnimation" />
    </>
  );
}

export default withRouter(homePage);
