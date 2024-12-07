import { Box, Stack, Typography } from '@mui/material'

import SubscribeForm from './common/SubscribeForm'

export default function CtaComp3() {
  return (
    <Box bgcolor='#ffffff' width='100%' py={6} border='1px dashed #000001'>
      <Stack
        px={{ xs: 2, sm: 8, md: 22, lg: 0 }}
        justifyContent='center'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={4}>
        <Typography
          component='h3'
          fontSize={{ xs: '42px', lg: '52px' }}
          fontWeight={700}
          lineHeight={{ xs: '50px', lg: '60px' }}
          textAlign='center'
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
