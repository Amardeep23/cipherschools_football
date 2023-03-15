import React from "react";
import "./Home.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Navbar } from '../../components/Navbar/Navbar'
import landing_sample from "../../assets/img/landing_sample.jpg";
import { Featured } from "../../components/Featured/Featured";
import { List } from "../../components/List/List";

export const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar></Navbar>
        <Featured type="series"></Featured>
        <div className="list_P" style={{marginTop:'13vh'}}>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
        </div>
      </div>
    </>
  );
};
