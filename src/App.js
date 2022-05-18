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
  const [isScalable, setIsScalable] = useState({
    isScalable: false,
    isNotScalable: false
  })
  const [isUnderLimit, setIsUnderLimit] = useState({
    isUnderLimit: false,
    isNotUnderLimit: false
  })
  const [isPaidByARE, setIsPaidByARE] = useState({
    isPaidByARE: false,
    isNotPaidByARE: false
  })

  const AssociateValue = {associate, setAssociate}
  const ProtectionValue = {needProtection, setNeedProtection}
  const ScalableValue = {isScalable, setIsScalable}
  const LimitValue = {isUnderLimit, setIsUnderLimit}
  const AREValue = {isPaidByARE, setIsPaidByARE}

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
