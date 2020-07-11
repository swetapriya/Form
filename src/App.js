import React from "react";

import NavBar from "./Components/UI/NavBar";
import Form from "./Components/UI/Form";
import ErrorBoundry from "./Components/ErrorBoundry";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ErrorBoundry>
        <Form />
      </ErrorBoundry>
    </React.Fragment>
  );
}

export default App;