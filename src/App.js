import logo from './logo.svg';
import './App.css';
// import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals,action,comedy} from './Urls'
// test
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netfilx Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
