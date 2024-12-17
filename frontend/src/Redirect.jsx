import { useEffect } from 'react'

const Redirect = () => {
  useEffect(() => {
    window.location.href = '/'
  }, [])
  return null
}

export default Redirect
