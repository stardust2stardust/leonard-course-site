import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="page-content not-found">
    <h1 className="page-title">Oops! That page doesn't exist.</h1>
    <NavLink to="/" className="back-to-home">
        Back to Home  
    </NavLink>
  </div>
  )
}
