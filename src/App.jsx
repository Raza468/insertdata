import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Insert from './pages/Insert';

const App = () => {
    return (   
    
    <>       
      <Router>
    <Navbar/>
                <Routes> {/* Use Routes instead of Switch */}
                    <Route path="/" element={Insert} />
                    <Route path="/about" element={<h2>About Page</h2>} />
                   
                </Routes>

        </Router>
     
<Insert/>          </>
    );
};

export default App;
