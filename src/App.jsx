import { useState } from 'react';
import './App.css';
import PropTypes from "prop-types"
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

function App() {

  const [step] = useState(1)
  const [feedbackData, setFeedbackData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (option) => {
    setFeedbackData({
      ...feedbackData,
      [option]: feedbackData[option] + step,
    });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={handleLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics good={feedbackData.good} neutral={feedbackData.neutral} bad={feedbackData.bad} />
      </Section>
    </>
  );
}

export default App;

App.propTypes = {
  step: PropTypes.number,
  feedbackData: PropTypes.object,
  option: PropTypes.string,
}