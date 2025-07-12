// src/App.js
import React from "react";

function App() {
  return (
    <div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>

      <main>
        <section id="home">
          <h1>Welcome Home</h1>
        </section>

        <section id="about">
          <h2>About Us</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
