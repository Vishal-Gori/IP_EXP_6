// // App.js
// import React from 'react';
// import './App.css'; // Import your CSS styles
// import Profile from './components/Profile';
// import Footer from './components/Footer';
// import ThankYou from './components/Thankyou';

// function App() {
//   return (
//     <div className="App">
//       {/* Background image */}
//       <Profile />
//       <Footer/>
      
//     </div>
//   );
// }

// export default App;





















import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ThankYou from './components/Thankyou';
import Contact from './components/Contact';

import Test from './Test';
import SkillsTable from './components/SkillsTable';

function App() {
  return (
    <>
      <BrowserRouter>
      <Profile />
      <Footer/>
        <Routes>
          <Route to="#profile" element={<Profile/>}/>
          <Route to="#contact" element={<Contact/>}/>
          <Route to="#technology" element={<SkillsTable/>}/>
          <Route path="/thank-you" element={<ThankYou/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
