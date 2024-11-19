import { Box, Stack, Typography } from '@mui/material'

import SubscribeForm from './common/SubscribeForm'

export default function CtaComp3() {
  return (
    <Box bgcolor='#ffffff' width='100%' py={6}>
      <Stack
        justifyContent='center'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={4}>
        <Typography
          component='h3'
          fontSize='52px'
          fontWeight={700}
          lineHeight='60px'
          sx={{
            textDecoration: 'underline',
          }}>
          Elevate Your Productivity Game Now
        </Typography>
        <SubscribeForm btnText='Subscribe for Free' />
      </Stack>
    </Box>
  )
}
