import FooterTwo from "components/footers/FooterTwo";
import HeaderOne from "components/headers/HeaderOne";
import { getBuildingTypes } from "features/agent_dashboard/property/buildingTypeSlice";
import { getHouseTypes } from "features/agent_dashboard/property/houseTypeSlice";
import { getPropertyCategories } from "features/agent_dashboard/property/propertyCategorySlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import "./Property.css";

const PropertyPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPropertyCategories());
    dispatch(getHouseTypes());
    dispatch(getBuildingTypes());
  }, []);
  return (
    <>
      <HeaderOne />
      <Outlet />
      <div className="footer-bg">
        <FooterTwo />
      </div>
    </>
  );
};

export default PropertyPage;
