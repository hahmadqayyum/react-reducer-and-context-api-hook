import React, { useState } from 'react';
import ContextValue from './ContextValue';
import Parent from './Parent'




function App() {
  const countState = useState(0)
  return (
    <ContextValue.Provider value={countState}>
      <Parent />



    </ContextValue.Provider>



  );
}

export default App;
