import React from "react";
import Header from "./components/Header";
import AddList from "./components/AddList";
import DisplayList from "./components/DisplayList";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <AddList />
      <DisplayList />
    </>
  );
};

export default App;
