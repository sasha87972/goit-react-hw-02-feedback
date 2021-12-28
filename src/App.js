import React, { Component } from 'react';
import Section from './components/section';
import FeedbackOptions from './components/feedbackOptions';
import Statistics from './components/statistics';
import Notification from './components/notification';
import data from './feedbackData.json';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage() {
    return Math.round(this.state.good / (this.countTotalFeedback() / 100));
  }
  render() {
    const feedback = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions items={data} feedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {feedback ? (
            <Statistics
              items={data}
              state={Object.values(this.state)}
              TotalFeedback={feedback}
              PositiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
