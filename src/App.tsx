import React from "react";
import "./App.css";

function App() {
  return (
    <div className="text-red-400 text-4xl flex justify-center items-center h-[100vh] text-center">
      {process.env.REACT_APP_MESSAGE}
    </div>
  );
}

export default App;
