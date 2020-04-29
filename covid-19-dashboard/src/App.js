import React from 'react';

import { fetch_all_data } from './api/index';

class App extends React.Component {
  async componentDidMount() {
    await fetch_all_data('Canada');
  }

  render() {
    return null;
  }
}

export default App;
