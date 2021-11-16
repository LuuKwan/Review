import React, { useState, useEffect } from "react";
import Review from "./Review";
import { FaBeer } from "react-icons/fa";
function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Our review</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  );
}

export default App;
