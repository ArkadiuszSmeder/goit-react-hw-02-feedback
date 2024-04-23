import { useState } from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App() {

  const step = 1
  const [feedbackData, setFeedbackData] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  const handleLeaveFeedback = (option) => {
    setFeedbackData({
      ...feedbackData,
      [option]: feedbackData[option] + step,
    });
    setHasFeedback(true)
  };

  const [hasFeedback, setHasFeedback] = useState ( false )

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={handleLeaveFeedback} />
      </Section>
      {hasFeedback ? (
      <Section title="Statistics">
        <Statistics good={feedbackData.Good} neutral={feedbackData.Neutral} bad={feedbackData.Bad} />
      </Section>
       ) : (
      <Notification message="There is no feedback"></Notification>
       )}
    </>
  );
}

export default App;