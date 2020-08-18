import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Test</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;
