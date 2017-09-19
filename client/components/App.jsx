import React from 'react';
import ImageBox from './ImageBox.jsx';
import Predict from './Predict.jsx';
import Tags from './Tags.jsx';
import * as Clarifai from '../api/predict.js';

class App extends React.Component {
  constructor() {
    super();

    this.state =  {
      tags: [],
      currentImg: null
    };
  }

  componentDidMount() {
    this.getTags('https://tinyurl.com/ybjjhzxr');
  }

  getTags(query) {
    Clarifai.predict(query).then(results => {
      this.setState({
        tags: results.outputs[0].data.concepts.map(i => i.name).splice(0, 10),
        currentImg: query
      })
    });
  }

  render() {
    return (
      <div className="main">
        <h1 className='heading'>
        <img className="logo" src={`${'https://tinyurl.com/y8bgbhqm'}`} height="40px" width="40px" />
          Auto Tag
        </h1>
        <Predict handlePredictInputChange={this.getTags.bind(this)}/>
        <ImageBox image={this.state.currentImg}/>
        <Tags tags={this.state.tags}/>
      </div>
    );
  }
}

export default App;
