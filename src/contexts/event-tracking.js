import React, { createContext, useContext, useEffect } from 'react'
const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

const AnalyticsContext = createContext({})

export const AnalyticsProvider = ({ children }) => {
  useEffect(() => {
    if (activeEnv === 'development') {
      window.fathom.trackGoal = (x, y) => {
        console.log(`I'm a fake event`, x, y)
      }
    }
  }, [])

  const logClicks = goalId => {
    window.fathom.trackGoal(goalId, 0)
  }

  return (
    <AnalyticsContext.Provider value={logClicks}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  return useContext(AnalyticsContext)
}
