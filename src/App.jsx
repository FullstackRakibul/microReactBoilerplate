import { useState } from "react";
import "./App.css";
import { Button, DatePicker } from "antd";
import ComponentHeader from "./v1/layouts/ComponentHeader";
import ComponentContainer from "./v1/layouts/ComponentContainer";
import ComponentFooter from "./v1/layouts/ComponentFooter";

function App() {
  return (
    <>
      <ComponentHeader />
      <ComponentContainer />
      <ComponentFooter />
    </>
  );
}

export default App;
