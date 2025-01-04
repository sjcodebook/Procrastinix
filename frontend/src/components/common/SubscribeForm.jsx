import { useState, useContext } from 'react'
import { useSearchParams } from 'react-router'
import { Box, Stack, Typography, TextField, Button, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

import { AppContext } from '../../App'
import { subscribe } from '../../actions/subscribe'

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
  textfieldProps = {},
}) {
  const { appState, setAppState } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [searchParams] = useSearchParams()

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      await subscribe({
        email,
        trackingLabel,
        source: searchParams.get('source') ?? 'WEBSITE',
        originSource: searchParams.get('origin_source'),
      })
      setAppState({
        ...appState,
        hasSubscribed: true,
      })
      setEmail('')
      setIsSubmitting(false)
    } catch (error) {
      setAppState({
        ...appState,
        hasSubscribed: false,
      })
      setIsSubmitting(false)
      console.error(error)
    }
  }

  return (
    <Box>
      {appState.hasSubscribed ? (
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
              {...textfieldProps}
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
  textfieldProps: PropTypes.object,
}
