import React from 'react';

function Error() {

  return(
    <div className='section'>
      <div className="section-title">
        <h5>
          Erreur
        </h5>
      </div>
      <div className="section-content">
        <p>Il semblerait que vous n'avez pas répondu a l'ensemble des questions. <br />
        Nous ne pouvons pas determiner de forme juridique à partir des éléments répondu.
        </p>
      </div>
    </div>
  )
}
export default Error