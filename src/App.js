import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './Component/App/Home'
import Results from './Component/Results';

// Context
import {AssociateContext} from './Context/AssociateContext'
import {ProtectedContext} from './Context/Protectedcontext'
import {AREContext} from './Context/AREContext'
import {LimitContext} from './Context/LimitContext'
import {ScalableContext} from './Context/ScalableContext'
import {ActivityContext} from './Context/ActivityContext'
import {SalaryContext} from './Context/SalaryContext'
import {SocialContext} from './Context/SocialContext'

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
  const [activity, setActivity] = useState({
    otherActivity: false,
    noOtherActivity: false
  })
  const [salary, setSalary] = useState({
    monthlySalary: false,
    noMonthlySalary: false
  })
  const [social, setSocial] = useState({
    needSocial: false,
    noNeedSocial: false
  })

  // VALUE
  const AssociateValue = {associate, setAssociate}
  const ProtectionValue = {needProtection, setNeedProtection}
  const ScalableValue = {scalable, setScalable}
  const LimitValue = {limitMicro, setLimitMicro}
  const AREValue = {gotARE, setGotARE}
  const ActivityValue = {activity, setActivity}
  const SalaryValue = {salary, setSalary}
  const SocialValue = {social, setSocial}

  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <AssociateContext.Provider value={AssociateValue}>
        <ProtectedContext.Provider value={ProtectionValue}>
        <AREContext.Provider value={AREValue}>
        <LimitContext.Provider value={LimitValue}>
        <ScalableContext.Provider value={ScalableValue}>
        <ActivityContext.Provider value={ActivityValue}>
        <SalaryContext.Provider value={SalaryValue}>
        <SocialContext.Provider value={SocialValue}>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/resultat' element={<Results />} />
          </Routes>

        </SocialContext.Provider>
        </SalaryContext.Provider>
        </ActivityContext.Provider>
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
