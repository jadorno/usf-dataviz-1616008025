import React, { Component } from 'react';

class Instructions extends Component {

  render() {
    return (
      <div className="container" style={{ paddingBottom: '75px' }}>

        <h1>General Instructions</h1>

        <ul>
          <li>
            <p><strong>Study Tasks</strong>: We have two types of tasks in this study, each with a time limit. On the expiry of time, it will switch to the next question.</p>
            <ul>
              <li>The first type has <u>12 tasks</u>, and the maximum time for each task is <u>10 seconds</u>.</li>
              <li>The second type has <u>6 tasks</u>, and the maximum time for each task is <u>15 seconds</u>.</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li><strong>Demographics</strong>: Please enter the details using the drop-down box on this page.</li>
        </ul>
        <ul>
          <li><strong>Participant Comment:</strong>Here you can write what reasons led to choosing an option over another.</li>
        </ul>
        <ul>
          <li><strong>Submission</strong>: On the last page, you will be assigned a <u>unique number</u>. You have to copy and enter this number in the <u>Amazon Mechanical Turk submission</u>. Please note that if you don&#39;t submit the correct number, you won&#39;t be paid.</li>
        </ul>

         <div className="text-center">
          <button type="button" className="btn btn-primary" style={{ width: '100px' }} onClick={this.props.nextPage}>Next</button>
        </div>

      </div>);
  }
}

export default Instructions;
