import { Box, Stack, Typography, Tooltip } from '@mui/material'

import Mail from '../assets/mail-icon.svg'
import Insta from '../assets/insta-icon.svg'

export default function MeetNix() {
  return (
    <Box bgcolor='#f6d7ff' width='100%' py={3} px={4}>
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        gap={2}>
        <Typography position='relative' component='h4' fontSize='16px' fontWeight={400}>
          ProcrastiNix.com &#169; 2024
        </Typography>
        <Stack direction='row' justifyContent='center' alignItems='center' gap={2}>
          <Tooltip title='support@procrastinix.com'>
            <img
              src={Mail}
              width='40px'
              onClick={() => window.open('mailto:support@procrastinix.com', '_blank')}
              style={{
                cursor: 'pointer',
              }}
            />
          </Tooltip>
          <Tooltip title='@procrastinix_official'>
            <img
              src={Insta}
              width='34px'
              style={{
                cursor: 'pointer',
              }}
            />
          </Tooltip>
        </Stack>
        <Stack direction='row' justifyContent='center' alignItems='center' gap={2}>
          <Typography
            component='h4'
            fontSize='16px'
            fontWeight={400}
            fontStyle='italic'
            sx={{
              textDecoration: 'underline',
            }}>
            Terms
          </Typography>
          <Typography
            component='p'
            fontSize='16px'
            fontWeight={400}
            fontStyle='italic'
            sx={{
              textDecoration: 'underline',
            }}>
            Privacy
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
