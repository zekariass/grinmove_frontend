import React from "react";
import { Link } from "react-router-dom";

const ListingListLayout = () => {
  return (
    <div style={{ position: "sticky", top: "100px" }}>
      <div className="row my-5 mx-3">
        <div className="col flex-center-general btn-general px-3 py-2 me-3">
          Grid View
        </div>
        <div className="col flex-center-general btn-general px-3 py-2 ">
          Map View
        </div>
      </div>
      <div>I am working on this part... I will integrate it once finished!</div>
    </div>
  );
};

export default ListingListLayout;
