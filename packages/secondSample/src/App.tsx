import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import routesConfig from './routes/routesConfig'
import { GlobalStyle } from './GlobalStyle'
import { device } from './constants'
import { useMediaQuery } from 'react-responsive'
import { setResolution } from './store/resolution/slices'
import { useActions } from './store'

const App = () => {
  const { desktop, tablet, mobile } = device

  const a = useActions({
    setResolution,
  })

  const isDesktop = useMediaQuery(desktop)
  const isTablet = useMediaQuery(tablet)
  const isMobile = useMediaQuery(mobile)

  useEffect(() => {
    if (isDesktop) {
      a.setResolution('desktop')
    }
    if (isTablet) {
      a.setResolution('tablet')
    }
    if (isMobile) {
      a.setResolution('mobile')
    }
  }, [isDesktop, isTablet, isMobile])

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        {routesConfig.map((route, i) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </div>
  )
}

export default App
