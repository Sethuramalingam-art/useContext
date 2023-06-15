import { MyGlobalContext } from "./MyGlobalContext";
import React, { useState } from "react";
import { getCopy } from "./Content";
import { Home } from "./Home";
import { About } from "./About";
function App() {
  const [copy, setCopy] = useState<string>(getCopy("Admin"));
  return;
  <MyGlobalContext.Provider value={{ copy, setCopy }}>
    <Home />
    <About />
  </MyGlobalContext.Provider>;
}
export default App;
