import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Section.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;