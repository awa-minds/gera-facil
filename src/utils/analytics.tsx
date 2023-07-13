import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('G-3BLCYYJ7ZS')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category: string, action: string) => {
  ReactGA.event({ category, action })
}

export const logException = (description: string) => {
  ReactGA.exception({ description })
}
