import toast from 'react-hot-toast'
import axios from 'axios'

import { trackEvent } from '../utils/analytics'
import { isValidEmail } from '../utils/common'

export const subscribe = async ({ email, trackingLabel, source, originSource }) => {
  trackEvent({
    action: 'btn_click',
    category: 'subscribe',
    label: trackingLabel,
    value: 1,
  })
  if (!email) {
    toast.error('Email address is required', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
    return Promise.reject(new Error('Email address is required'))
  }
  const trimmedEmail = email.trim()
  if (!isValidEmail(trimmedEmail)) {
    toast.error('Invalid email address', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
    return Promise.reject(new Error('Invalid email address'))
  }
  const apiUrl = import.meta.env.VITE_SERVER_API_URL + '/add-hh-subscriber-email'
  try {
    await axios.post(apiUrl, {
      email,
      source,
      originSource,
    })
    toast.success('You’re In! Welcome to Hoot & Hustle!', {
      duration: 5000,
      icon: '🦉',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  } catch (error) {
    toast.error(error.response.data.message || 'Something Went Wrong. Please Try Again Later.', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
    return Promise.reject(error)
  }
}
