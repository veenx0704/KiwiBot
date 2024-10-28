import './App.css';

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import MakeRecipe from './pages/MakeRecipe';
import ShowRecipe from './pages/ShowRecipe';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />        {/* Home page */}
          <Route path="/make-recipe" element={<MakeRecipe />} />  {/* Make Recipe page */}
          <Route path="/show-recipe" element={<ShowRecipe />} />  {/* Show Recipe page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
