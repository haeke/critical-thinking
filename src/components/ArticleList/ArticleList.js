import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./ArticleList.css";

// The article list will take in 4 list items the accompany the Article component

const ArticleList = ({
  question1,
  question2,
  question3,
  question4,
  articleListStyle
}) => {
  return (
    <ul className={classnames("articleList", articleListStyle)}>
      <li>{question1}</li>
      <li>{question2}</li>
      <li>{question3}</li>
      <li>{question4}</li>
    </ul>
  );
};

ArticleList.propTypes = {
  question1: PropTypes.string,
  question2: PropTypes.string,
  question3: PropTypes.string,
  question4: PropTypes.string
};

ArticleList.defaultProps = {
  question1: "Default Text",
  question2: "Default Text",
  question3: "Default Text",
  question4: "Default Text"
};

export default ArticleList;
