import React from 'react';

import FormInputs from './components/FormInputs';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>My Tasks List</h1>

      <FormInputs />
      <List />
      <Footer />

    </div>
  );
}

export default App;
