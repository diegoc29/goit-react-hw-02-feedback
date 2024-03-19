import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; 
import FeedbackOptions from './components/FeedbackOptions'; 
import Statistics from './components/Statistics'; 
import Section from './components/Section'; 
import './index.css';
import Styles from './styles/Section.module.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FeedbackOptions />
    <Statistics />
    <Section />
    <div className={Styles.app}></div> 
  </React.StrictMode>
)
