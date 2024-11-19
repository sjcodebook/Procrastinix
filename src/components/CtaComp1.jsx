import { Box, Stack, Typography } from '@mui/material'

import SubscribeForm from './common/SubscribeForm'

export default function CtaComp1() {
  return (
    <Box bgcolor='#ffffff' width='100%' pt={4} pb={6}>
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
          Ready to Supercharge Your Productivity?
        </Typography>
        <SubscribeForm showSubText={false} btnText='Join Now for Free' />
        <Typography
          component='h4'
          fontSize='18px'
          fontWeight={400}
          fontStyle='italic'
          sx={{
            textDecoration: 'underline',
          }}>
          Receive twice-weekly emails and take the first step towards a more productive, balanced
          life.
        </Typography>
      </Stack>
    </Box>
  )
}
