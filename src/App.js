import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './Component/App/Home'

// Context
import {AssociateContext} from './Context/AssociateContext'
import {ProtectedContext} from './Context/Protectedcontext'
import {AREContext} from './Context/AREContext'
import {LimitContext} from './Context/LimitContext'
import {ScalableContext} from './Context/ScalableContext'

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
  const [scalable, setScalable] = useState({
    isScalable: false,
    isNotScalable: false
  })
  const [limitMicro, setLimitMicro] = useState({
    isUnderLimit: false,
    isAboveLimit: false
  })
  const [gotARE, setGotARE] = useState({
    isPaidByARE: false,
    isNotPaidByARE: false
  })

  const AssociateValue = {associate, setAssociate}
  const ProtectionValue = {needProtection, setNeedProtection}
  const ScalableValue = {scalable, setScalable}
  const LimitValue = {limitMicro, setLimitMicro}
  const AREValue = {gotARE, setGotARE}

  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <AssociateContext.Provider value={AssociateValue}>
        <ProtectedContext.Provider value={ProtectionValue}>
        <AREContext.Provider value={AREValue}>
        <LimitContext.Provider value={LimitValue}>
        <ScalableContext.Provider value={ScalableValue}>
            
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

        </ScalableContext.Provider>
        </LimitContext.Provider>
        </AREContext.Provider>
        </ProtectedContext.Provider>
        </AssociateContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
