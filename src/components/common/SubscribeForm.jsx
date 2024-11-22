import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

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

export default function SubscribeForm({ showSubText = true, btnText = 'Subscribe for Free Now' }) {
  return (
    <Box>
      <Stack
        mt={0.5}
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent={{ xs: 'center', lg: 'flex-start' }}
        alignItems={{ xs: 'center', lg: 'flex-start' }}
        width='100%'
        gap={2}>
        <Stack justifyContent='center' alignItems='center' gap={0.5}>
          <CustomTextField
            variant='outlined'
            placeholder='Your Email Address...'
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
        <CustomBtn variant='contained' size='large'>
          <Typography fontSize='15px' fontWeight={700}>
            {btnText}
          </Typography>
        </CustomBtn>
      </Stack>
    </Box>
  )
}

SubscribeForm.propTypes = {
  showSubText: PropTypes.bool,
  btnText: PropTypes.string,
}
