import React from 'react'
import rightangle from '/src/assets/ico/chevron-right.png';
function TopMovingStates() {
  return (
    <div className="container pt-3 pb-3">
      <h2 className='mt-3 mb-3'>Top Moving States</h2>
      <div className="row gy-3">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-8 font-small text-gray d-flex justify-content-center align-items-center fw-100">Movers in Florida</div>
            <div className="col-4">
              <span className='font-small text-gray'>(80)</span>
              <img className='img-fluid mt-1' src={rightangle} />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-8 font-small text-gray d-flex justify-content-center align-items-center">Movers in New Jersy</div>
            <div className="col-4">
              <span className='font-small text-gray'>(80)</span>
              <img src={rightangle} />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-8 font-small text-gray d-flex justify-content-center align-items-center">Movers in Illinois</div>
            <div className="col-4">
              <span className='font-small text-gray'>(80)</span>
              <img src={rightangle} />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-7 font-small text-gray d-flex justify-content-center align-items-center">Movers in New York</div>
            <div className="col-5">
              <span className='font-small text-gray'>(80)</span>
              <img src={rightangle} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-7 font-small text-gray d-flex justify-content-center align-items-center">Movers in Texas</div>
            <div className="col-5">
              <span className='font-small text-gray'>(80)</span>
              <img src={rightangle} />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-7 font-small text-gray d-flex justify-content-center align-items-center">Movers in Virgina</div>
            <div className="col-5">
              <span className='font-small text-gray'>(80)</span>
              <img src={rightangle} />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-7 font-small text-gray d-flex justify-content-center align-items-center">Movers in Maryland</div>
            <div className="col-5">
              <span className='font-small text-gray'>(80)</span>
              <img src={rightangle} />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-7 font-small text-gray d-flex justify-content-center align-items-center">Movers in Missouri</div>
            <div className="col-5">
              <span className='font-small text-gray'>(80)</span>
              <img src={rightangle} />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <div className="row top-moving-box">
            <div className="col-7 font-small text-gray d-flex justify-content-center align-items-center">Movers in Pennsylvania</div>
            <div className="col-5">
              <span className='font-small text-gray'>(80)</span>
              <img src={rightangle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMovingStates