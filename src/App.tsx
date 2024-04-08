import { useState } from 'react'
import './App.css'

export function App() {

  const [pricingMode, setPricingMode] = useState(false)

  const toggleMenu = () => {
    setPricingMode(!pricingMode)
  }

  return (
    <div className="appContainer">

      <h1 className='title'>Our Pricing</h1>

      <div className="toggleMenu">
        <p>Annually</p>

        <label htmlFor="toggle" className='switch'>
          <input id='toggle' type='checkbox' onClick={toggleMenu} />
          <span className='slider'></span>
        </label>

        <p>Monthly</p>
      </div>

      {pricingMode ? (

        <div className="monthlyPrices">
          <div className="basic">
            <p className='nameBasic'>Basic</p>
            <h2 className='priceBasic'>$19.99</h2>
            <div className="featuresBasic">
              <p>500 GB Storage</p>
              <p>2 Users Allowed</p>
              <p>Send up to 3 GB</p>
            </div>
            <div className="lmBtn">
              <a>Learn More</a>
            </div>
          </div>

          <div className="pro">
            <p className='namePro'>Professional</p>
            <h2 className='pricePro'>$24.99</h2>
            <div className="featuresPro">
              <p>1 TB Storage</p>
              <p>5 Users Allowed</p>
              <p>Send up to 10 GB</p>
            </div>
            <div className="lmBtn white">
              <a>Learn More</a>
            </div>
          </div>

          <div className="master">
            <p className='nameMaster'>Master</p>
            <h2 className='priceMaster'>$39.99</h2>
            <div className="featuresMaster">
              <p>2 TB Storage</p>
              <p>10 Users Allowed</p>
              <p>Send up to 20 GB</p>
            </div>
            <div className="lmBtn">
              <a>Learn More</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="annualyPrices">

          <div className="basic">
            <p className='nameBasic'>Basic</p>
            <h2 className='priceBasic'>$199.99</h2>
            <div className="featuresBasic">
              <p>500 GB Storage</p>
              <p>2 Users Allowed</p>
              <p>Send up to 3 GB</p>
            </div>
            <div className="lmBtn">
              <a>Learn More</a>
            </div>
          </div>

          <div className="pro">
            <p className='namePro'>Professional</p>
            <h2 className='pricePro'>$249.99</h2>
            <div className="featuresPro">
              <p>1 TB Storage</p>
              <p>5 Users Allowed</p>
              <p>Send up to 10 GB</p>
            </div>
            <div className="lmBtn white">
              <a>Learn More</a>
            </div>
          </div>

          <div className="master">
            <p className='nameMaster'>Master</p>
            <h2 className='priceMaster'>$399.99</h2>
            <div className="featuresMaster">
              <p>2 TB Storage</p>
              <p>10 Users Allowed</p>
              <p>Send up to 20 GB</p>
            </div>
            <div className="lmBtn">
              <a>Learn More</a>
            </div>
          </div>

        </div>

      )}

    </div>
  )
}