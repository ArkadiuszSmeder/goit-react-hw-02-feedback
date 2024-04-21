import React from 'react';
import PropTypes from "prop-types"
import { VoteButton }  from '../styled/styled-feedback';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  
  return (
    <div>
      {options.map((option) => (
        <VoteButton key={option} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </VoteButton>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}
