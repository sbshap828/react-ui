import React from 'react'

function Home() {

  return (
    <div>
      <h1 className="home">Welcome to Nasa POD CRUD!</h1>
      <img src="https://apod.nasa.gov/apod/image/1901/Jan3yutu2CNSA.jpg" width="600px" height="600"/>
    
 
        <div className="train">
            {/*     where does it get this info? */}
        <div className="train-times">
             {/* <Trains arrivals={stationInfo.N} direction="Northbound"/>
              <Trains arrivals={stationInfo.S} direction="Southbound"/> */}
        </div>
        </div>

    </div>
  )
  
}

export default Home