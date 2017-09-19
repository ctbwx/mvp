import React from 'react';
import * as Data from '../../api/tags.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1 className='heading'>Auto Tag</h1>
    );
  }
}

Data.predictions('https://tinyurl.com/k9onln7').then(tags => console.log(tags))

export default App;
