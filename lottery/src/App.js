import React, { Component } from 'react';
import Child from './components/child/child';
import './App.css';

export class App extends Component {
  render() {
    const str = 'Indraraj';
    const arr = ['jokes', 'mad', 'laugh'];
    const n = 12;
    const obj = { name: 'alexa', age: 32 };
    return (
      <div className='App'>
        <Child
          maxNum={6}
          str={str}
          arr={['lol', 'lol2']}
          n={12}
          obj={{ name: 'alexi' }}
          name='indra'
        />
      </div>
    );
  }
}

export default App;
