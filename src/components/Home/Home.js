import React from "react";
import PropTypes from "prop-types";

import "./Home.css";

const Home = ({ homeTitle }) => {
  return (
    <section className="home">
      <div className="homeContainer">
        <h1 className="homeHeader">{homeTitle} </h1>
      </div>
    </section>
  );
};

Home.propTypes = {
  homeTitle: PropTypes.string
};

Home.defaultProps = {
  homeTitle: "Default Text"
};

export default Home;
