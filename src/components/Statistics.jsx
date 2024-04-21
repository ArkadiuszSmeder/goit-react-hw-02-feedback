import React from 'react';
import PropTypes from "prop-types"
import { Stat }  from '../styled/styled-statistics';


export default function Statistics({ good, neutral, bad }) {
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback === 0 ? 0 : ((good / totalFeedback) * 100).toFixed(1);

  return (
    <>
      <Stat>Good: {good}</Stat>
      <Stat>Neutral: {neutral}</Stat>
      <Stat>Bad: {bad}</Stat>
      <Stat>Total Feedback: {totalFeedback}</Stat>
      <Stat>Positive Feedback: {positivePercentage}%</Stat>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number,
  positivePercentage: PropTypes.number,
}