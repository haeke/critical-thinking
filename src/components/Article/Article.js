import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./Article.css";

// This component will create each section of the page that lists the Who, What, When, How etc... The children component should be a ArticleList component

const Article = ({ articleHeader, articleStyle, children }) => {
  return (
    <section className="articleContainer">
      <div className={classnames("headerContainer", articleStyle)}>
        <h3 className="header">{articleHeader}</h3>
      </div>
      {children}
    </section>
  );
};

Article.propTypes = {
  articleHeader: PropTypes.string,
  articleStyle: PropTypes.string,
  children: PropTypes.node
};

Article.defaultProps = {
  articleHeader: "Default Text",
  articleStyle: undefined,
  children: undefined
};

export default Article;
