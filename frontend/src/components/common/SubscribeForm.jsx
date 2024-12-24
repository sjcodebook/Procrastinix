import { useState } from 'react'
import { useSearchParams } from 'react-router'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Box, Stack, Typography, TextField, Button, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

import { trackEvent } from '../../utils/analytics'
import { isValidEmail } from '../../utils/common'

const CustomBtn = styled(Button)(() => ({
  color: '#000',
  backgroundColor: '#9afd7f',
  borderRadius: '100px',
  width: '250px',
  height: '70px',
}))

const CustomTextField = styled(TextField)(() => ({
  backgroundColor: '#f4f6fc',
  borderRadius: '100px',
  width: '300px',
  height: '70px',
  border: 'none',
  '& fieldset': { border: 'none' },
}))

export default function SubscribeForm({
  showSubText = true,
  btnText = 'Subscribe for Free Now',
  trackingLabel = 'cta',
}) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [searchParams] = useSearchParams()

  const handleSubmit = async () => {
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
      return
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
      return
    }
    setIsSubmitting(true)
    const apiUrl = import.meta.env.VITE_SERVER_API_URL + '/add-hh-subscriber-email'
    try {
      await axios.post(apiUrl, {
        email,
        source: 'WEBSITE',
        originSource: searchParams.get('origin_source'),
      })
      setIsSubmitted(true)
      toast.success('You’re In! Welcome to Hoot & Hustle!', {
        duration: 5000,
        icon: '🦉',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      setEmail('')
      setIsSubmitting(false)
    } catch (error) {
      setIsSubmitting(false)
      toast.error(error.response.data.message || 'Something Went Wrong. Please Try Again Later.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    }
  }

  return (
    <Box>
      {isSubmitted ? (
        <Box border='2px solid #020304' borderRadius='10px' p={2} bgcolor='#f4f6fc'>
          <Typography fontSize='18px' fontWeight={500}>
            ✅ You’re officially part of Hoot & Hustle! 🦉
          </Typography>
          <Typography fontSize='16px' fontWeight={400}>
            Keep an eye on your inbox – Nix has some wisdom-packed emails heading your way soon. 🚀
          </Typography>
        </Box>
      ) : (
        <Stack
          mt={0.5}
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
          alignItems={{ xs: 'center', lg: 'flex-start' }}
          width='100%'
          gap={2}>
          <Stack justifyContent='center' alignItems='center' gap={0.5}>
            <CustomTextField
              type='email'
              variant='outlined'
              placeholder='Your Email Address...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              slotProps={{
                input: {
                  style: {
                    borderRadius: '100px',
                    width: '300px',
                    height: '70px',
                    border: '2.5px solid #020304',
                    color: '#000',
                  },
                },
              }}
            />
            {showSubText && (
              <Typography fontStyle='italic' fontSize='15px'>
                Join 10,000+ happy readers worldwide.
              </Typography>
            )}
          </Stack>
          <CustomBtn
            variant='contained'
            size='large'
            onClick={handleSubmit}
            disabled={isSubmitting}>
            {isSubmitting ? (
              <CircularProgress color='success' />
            ) : (
              <Typography fontSize='15px' fontWeight={700}>
                {btnText}
              </Typography>
            )}
          </CustomBtn>
        </Stack>
      )}
    </Box>
  )
}

SubscribeForm.propTypes = {
  showSubText: PropTypes.bool,
  btnText: PropTypes.string,
  trackingLabel: PropTypes.string,
}
