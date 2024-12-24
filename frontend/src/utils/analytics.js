import ReactGA from 'react-ga4'

export const initializeGA = () => {
  ReactGA.initialize('G-YP09V3RYCN')
}

export const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page })
}
