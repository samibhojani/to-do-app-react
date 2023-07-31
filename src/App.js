import React from 'react';

import FormInputs from './components/FormInputs';
import List from './components/List';
import Footer from './components/Footer';
import {DataProvider} from './components/DataProvider'

function App() {
  return (
    
    <DataProvider>
     <div className="App">
      <h1>My Tasks List</h1>

      <FormInputs />
      <List />
      <Footer />

    </div>
    </DataProvider>
  );
}

export default App;
