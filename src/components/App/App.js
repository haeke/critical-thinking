import React from "react";

import CriticalThinking from "../CriticalThinking/CriticalThinking";
import Home from "../Home/Home";
import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Footer from "../Footer/Footer";

// Import the list of questions as objects inside of a static file for now. I don't see the need to use an API for this.
import {
  whoQuestions1,
  whoQuestions2,
  whatQuestions1,
  whatQuestions2,
  whereQuestions1,
  whereQuestions2,
  whenQuestions1,
  whenQuestions2,
  whyQuestions1,
  whyQuestions2,
  howQuestions1,
  howQuestions2
} from "../static/articles";

import "./App.css";

const App = () => {
  return (
    <div className="appContainer">
      <Home homeTitle="Looking For..." />
      <CriticalThinking criticalThinkingHeader="Critical Thinking Skills..." />
      <Article articleHeader="Who">
        <ArticleList articleListStyle="whoListStyle" {...whoQuestions1} />
        <ArticleList articleListStyle="whoListStyle2" {...whoQuestions2} />
      </Article>
      <Article articleStyle="whatHeader" articleHeader="What">
        <ArticleList articleListStyle="whatListStyle" {...whatQuestions1} />
        <ArticleList articleListStyle="whatListStyle2" {...whatQuestions2} />
      </Article>
      <Article articleStyle="whereHeader" articleHeader="Where">
        <ArticleList articleListStyle="whereListStyle" {...whereQuestions1} />
        <ArticleList articleListStyle="whereListStyle2" {...whereQuestions2} />
      </Article>
      <Article articleStyle="whenHeader" articleHeader="When">
        <ArticleList articleListStyle="whenListStyle" {...whenQuestions1} />
        <ArticleList articleListStyle="whenListStyle2" {...whenQuestions2} />
      </Article>
      <Article articleStyle="whyHeader" articleHeader="Why">
        <ArticleList articleListStyle="whyListStyle" {...whyQuestions1} />
        <ArticleList articleListStyle="whyListStyle2" {...whyQuestions2} />
      </Article>
      <Article articleStyle="howHeader" articleHeader="How">
        <ArticleList articleListStyle="howListStyle" {...howQuestions1} />
        <ArticleList articleListStyle="howListStyle2" {...howQuestions2} />
      </Article>
      <Footer />
    </div>
  );
};

export default App;
