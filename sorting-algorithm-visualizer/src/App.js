import Header from "./components/Header";
import React from "react";
import Form from "./components/Form";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <input style = {{display: "none"}} id = "isSorted" value = "0"/>

    </React.Fragment>
  );
}

export default App;
