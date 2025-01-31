import React from "react";

function App() {
  return (
    <div>
      <h1> Hi, I'm Damien </h1> {/* Replace (your name) with your actual name */}
      
      {/* Update the alt text to describe the content of the image */}
      <img
        src="src/Studio-Lighting-Retouching-Athletes-after.webp" 
        alt="Damien in a studio setting"  // Describe the image more clearly
      />
      
      <h2>About Me</h2>
      
      <p>I'm a developer who loves building things with React and learning new technologies!</p>

      <a href="https://github.com/Damien">GitHub</a>
      <br />
      <a href="https://linkedin.com/in/Damien">LinkedIn</a>
    </div>
  );
}

export default App;
