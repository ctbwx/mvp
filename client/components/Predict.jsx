import React from 'react';

class Predict extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handlePredictInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="input">
        Enter your image url here: <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
      </div>
    );
  }
}

export default Predict;
