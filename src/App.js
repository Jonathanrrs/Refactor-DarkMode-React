import React, {Fragment} from 'react';
import Header from './components/Header'
import TopCardlist from './components/Top-cards-list';
import './Globals.css';
import Overview from './components/Overview';


function App() {
  return (
    <Fragment>
      <Header />
      <TopCardlist/>
      <Overview />
    </Fragment>
  );
}

export default App;
  