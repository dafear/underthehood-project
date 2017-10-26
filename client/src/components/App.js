import React, {Component} from 'react';
import GoogleMap from './GoogleMap';
import Search from './Search';
import './App.css';
 // import './Map.css';

class App extends Component {
  render() {
    return (
      <div className="Cool">
      	 <Search />
        <GoogleMap {...this.props} />
      </div>
    );
  }
}

export default App;
