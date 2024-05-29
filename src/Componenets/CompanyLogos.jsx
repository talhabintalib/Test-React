import React from 'react'
import companyLogos from '/src/assets/clogo.png';
function CompanyLogos() {
  return (
    <div className='container p-2'>
    <div className='row'>
    <div className='col-12 text-center'>

        <img className='img-fluid' src={companyLogos} />
    </div>
    </div>
    </div>
  )
}

export default CompanyLogos