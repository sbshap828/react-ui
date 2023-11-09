import {useState, useEffect} from 'react'
import {getPods} from '../services/pods.js'
import Pod from '../components/Pod.jsx'
//import React from 'react'

function Pods({setPod}) {
    const [pods,setPods] =useState([])

    useEffect(()=>{
        fetchPods()
    }, [])

   async function fetchPods() {
    const allPods=await getPods()
    setPods(allPods)
   }

  return (
    <div className="main-container">
      <h1>All 12 rrPODS!i am on Pods.jsx screen</h1>
      <div className="pods-container">
        {pods.map((pod, i) => (
          <Pod key={i} pod={pod} setPod={setPod}/>
        ))}
      </div>
    </div>
  )
}

export default Pods