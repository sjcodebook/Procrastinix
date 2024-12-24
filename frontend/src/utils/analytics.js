import ReactGA from 'react-ga4'

export const initializeGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID)
}

export const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page })
}

export const trackEvent = ({ action, category, label, value }) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  })
}
