import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description: "Arturo Arce's Web Portfolio",
    },
    {
      name: "Resume",
      description: "Arturo Arce's Resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
