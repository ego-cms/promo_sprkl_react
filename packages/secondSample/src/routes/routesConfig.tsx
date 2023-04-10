import React from 'react'
import { Overview } from '../pages'
import { Navigate } from 'react-router-dom'
import { pages } from '../constants'

const routesConfig = [
  {
    path: '/',
    element: <Navigate to={pages.OVERVIEW} />,
  },
  {
    path: pages.OVERVIEW,
    element: <Overview />,
  },
]

export default routesConfig
