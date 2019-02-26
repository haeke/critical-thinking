import React from "react";

import CriticalThinking from "../CriticalThinking/CriticalThinking";
import Home from "../Home/Home";
import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Footer from "../Footer/Footer";

import "./App.css";

const whoQuestions1 = {
  question1: "... benefits from this?",
  question2: "... is this harmful to?",
  question3: "... makes decisions about this?",
  question4: "... is most directly affected?"
};
const whoQuestions2 = {
  question1: "... have you also header discuss this?",
  question2: "... would be the best person to consult?",
  question3: "... will be the key people in this?",
  question4: "... deserves recognition for this?"
};
const whatQuestions1 = {
  question1: "... are the strengths/weaknesses?",
  question2: "... is another perspective?",
  question3: "... is another alternative?",
  question4: "... would be a counter-argument?"
};
const whatQuestions2 = {
  question1: "... is the best/worst scenario?",
  question2: "... would be the best person to consult?",
  question3: "... can we do to make a positive change?",
  question4: "... is getting in the way of our action?"
};
const whereQuestions1 = {
  question1: "... would we see this in the real world?",
  question2: "... are there similar concepts/situations?",
  question3: "... is there the most need for this?",
  question4: "... in the world would this be a problem?"
};
const whereQuestions2 = {
  question1: "... can we get more information?",
  question2: "... do we go for help with this?",
  question3: "... will this idea take us?",
  question4: "... are the areas for improvement?"
};
const whenQuestions1 = {
  question1: "... is this acceptable/unacceptable?",
  question2: "... would this benefir our society?",
  question3: "... would this cause a problem?",
  question4: "... is the best time to take action?"
};
const whenQuestions2 = {
  question1: "... will we know we've succeeded?",
  question2: "... has this played a part in our history?",
  question3: "... can we expect this to change?",
  question4: "... should we ask for help with this?"
};
const whyQuestions1 = {
  question1: "... is this a problem/challenge?",
  question2: "... is it relevant to me/others?",
  question3: "... is this the best/worst scenario?",
  question4: "... are people influenced by this?"
};
const whyQuestions2 = {
  question1: "... should people know about this?",
  question2: "... do we go for help with this?",
  question3: "... have we allowed this to happen?",
  question4: "... is there a need for this today?"
};
const howQuestions1 = {
  question1: "... does this benefit us/others?",
  question2: "... does this harm us/others?",
  question3: "... do we see this in the future?",
  question4: "... can we change this for our good?"
};
const howQuestions2 = {
  question1: "... is this similar to _______?",
  question2: "... does this disrupt things?",
  question3: "... do we know the truth about this?",
  question4: "... will we approach this safely?"
};

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
        {/* add styles to add a lighter background */}
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
