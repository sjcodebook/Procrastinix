import { Box, Stack, Typography } from '@mui/material'

import Owl from '../assets/owl-outline.svg'

export default function MeetNix() {
  return (
    <Box bgcolor='#f6d7ff' width='100%' pt={6} pb={6}>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={10}>
        <Stack px={4} py={6} bgcolor='#fff' gap={2} borderRadius='20px'>
          <Typography component='h3' fontSize='52px' fontWeight={700} lineHeight='60px'>
            Meet Nix and the Mission of ProcrastiNix
          </Typography>
          <Typography
            component='p'
            fontSize='34px'
            fontWeight={400}
            lineHeight='42px'
            fontStyle='italic'>
            At ProcrastiNix, we’re committed to helping you defeat procrastination and unlock your
            potential. Guided by Nix the Owl, your wise companion, we share proven tips and engaging
            insights designed to transform how you approach productivity and self-growth.
          </Typography>
        </Stack>
        <img src={Owl} width='500px' />
      </Stack>
    </Box>
  )
}
