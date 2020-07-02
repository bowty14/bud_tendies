import React from 'react';
import Header from "./Header";
import NewStrainControl from "./NewStrainControl";


function App() {

  return (
    <React.Fragment>
      <div className="app-wrapper">
      <Header />
      <NewStrainControl />
      </div>
    </React.Fragment>
  );
}


export default App;