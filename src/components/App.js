import React from "react"

import Header from "components/Header"
import AddList from "components/AddList"
import DisplayList from "components/DisplayList"
import GlobalStyles from "components/GlobalStyles"

const App = () => {
  return (
    <>
      <Header />
      <AddList />
      <DisplayList />
      <GlobalStyles />
    </>
  )
}

export default App
