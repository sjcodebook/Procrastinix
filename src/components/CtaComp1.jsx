import { Box, Stack, Typography } from '@mui/material'

import SubscribeForm from './common/SubscribeForm'

export default function CtaComp1() {
  return (
    <Box bgcolor='#ffffff' width='100%' pt={4} pb={6} border='1px dashed #000001'>
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
          Ready to Supercharge Your Productivity?
        </Typography>
        <SubscribeForm showSubText={false} btnText='Join Now for Free' />
        <Typography
          component='h4'
          fontSize='18px'
          fontWeight={400}
          fontStyle='italic'
          textAlign='center'
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
