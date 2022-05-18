import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './Component/App/Home'

// Context
import {AssociateContext} from './Context/AssociateContext'
import {ProtectedContext} from './Context/Protectedcontext'

function App() {
  
  // State
  const [associate, setAssociate] = useState({
    isAlone: false,
    isNotAlone: false
  })
  const [needProtection, setNeedProtection] = useState({
    needProtection: false,
    noNeedProtection: false
  })

  const AssociateValue = {associate, setAssociate}
  const ProtectionValue = {needProtection, setNeedProtection}

  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <AssociateContext.Provider value={AssociateValue}>
          <ProtectedContext.Provider value={ProtectionValue}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          </ProtectedContext.Provider>
        </AssociateContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
