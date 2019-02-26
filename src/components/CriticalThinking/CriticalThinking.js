import React from "react";
import PropTypes from "prop-types";

import "./CriticalThinking.css";

const CriticalThinking = ({ criticalThinkingHeader }) => {
  return (
    <section className="criticalThinkingContainer">
      <div className="criticalThinkingHeader">{criticalThinkingHeader}</div>
    </section>
  );
};

CriticalThinking.propTypes = {
  criticalThinkingHeader: PropTypes.string
};

CriticalThinking.defaultProps = {
  criticalThinkingHeader: "Default Text"
};

export default CriticalThinking;
