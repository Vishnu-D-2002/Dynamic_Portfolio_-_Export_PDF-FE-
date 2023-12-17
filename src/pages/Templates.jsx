import React from 'react'
import { Link } from 'react-router-dom'

function Templates() {
  return (
    <div>
      <h1>CHOOSE ANY TEMPLATE</h1>
      <Link to="/temp1">
        <img src="/images/CV-Template-01.jpg" alt="Image 1" width={200} height={200}/>
      </Link>
      <Link to="/temp2">
        <img src="/images/CV-Template-01.jpg" alt="Image 2" width={200} height={200}/>
      </Link>
      <Link to="/temp3">
        <img src="/images/CV-Template-01.jpg" alt="Image 3" width={200} height={200}/>
      </Link>
      <Link to="/temp4">
        <img src="/images/CV-Template-01.jpg" alt="Image 4" width={200} height={200}/>
      </Link>
      <Link to="/temp5">
        <img src="/images/CV-Template-01.jpg" alt="Image 5" width={200} height={200}/>
      </Link>
    </div>
  )
}

export default Templates