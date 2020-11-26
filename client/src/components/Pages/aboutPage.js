import React from "react";
import { withRouter } from "react-router-dom";
import { Header } from "../Common";

function AboutPage() {
  return (
    <>
      <div className="BodyStructure">
        <p>
          If you encounter any problem, please contact yeseulkang0328@gmail.com
        </p>
      </div>
      <Header />
    </>
  );
}
export default withRouter(AboutPage);
