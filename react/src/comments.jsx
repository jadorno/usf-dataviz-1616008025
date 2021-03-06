import React, { Component } from 'react';

class Comments extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: undefined
    }
  }

  handleChange(event) {
    switch(event.target.name) {
      case 'comments':
        this.setState({ comments: event.target.value });
        break;
      default:
        console.log('Error Updating '+event.target.name)
      }
  }

  render() {

    return (
      <div className="container">

        <h1>Comments</h1>

        <div className="form-group">
          <label htmlFor="comments">Please write what features or atributes of the pictures (scatterplots) you were looking when performing the tasks that led you choose one picture over another. You can also add any other addtional points.</label>
          <textarea className="form-control" name="comments" id="comments" rows="5" onChange={this.handleChange.bind(this)} />
        </div>

        <br /><br />

        <div className="text-center">
          <button type="button" className="btn btn-primary" style={{ width: '100px' }} onClick={() => {this.props.nextPage(this.state)}}>Next</button>
       </div>

      </div>);
  }
}

export default Comments;