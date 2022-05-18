import React, { useContext } from 'react';
import SalaryContext from '../../Context/SalaryContext';


function Salary(props) {

  const {salary, setSalary} = useContext(SalaryContext)

  const toggleSalary = (e) => {
    const id = e.target.name
    setSalary({[id]: true})
  }


  return (
    <div>
    <h2>Je souhaite me rémunérer en continue, tous les mois par exemple ?</h2>
    <div className="select_container">

        <button
        name='monthlySalary'
        style={{marginRight: '16px'}}
        onClick={(e)=>toggleSalary(e)}
        className={salary.monthlySalary ? 'select focus' : 'select shadow'}
        >
          Oui
        </button>
        <button
          name='noMonthlySalary'
          style={{marginRight: '16px'}}
          onClick={(e)=>toggleSalary(e)}
          className={salary.noMonthlySalary ? 'select focus' : 'select shadow'}
        >
          Non
        </button>
    </div>
  </div>
  )
}
export default Salary