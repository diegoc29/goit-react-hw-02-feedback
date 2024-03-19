import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Section.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  if (!Array.isArray(options) || options.length === 0) {
    return null; 
  }

  return (
    <div className={styles.feedbackOptions}>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;