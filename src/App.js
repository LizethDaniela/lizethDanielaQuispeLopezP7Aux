import React, { Fragment } from 'react';
import Navbar from './components/navigation/Navbar';
import NewPets from './components/Pets/NewPets';

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <NewPets/>
    </Fragment>
  )
}

export default App

