import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

import Mascot from '../assets/procrastinix_mascot.png'
import GreenHighlight from '../assets/green-highlight.svg'

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

export default function HeroComp() {
  return (
    <Box bgcolor='#ffffff' width='100%' py={8}>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={10}>
        <img src={Mascot} width={500} />
        <Stack justifyContent='center' alignItems='space-between' gap={2}>
          <Box position='relative'>
            <img
              src={GreenHighlight}
              width={600}
              style={{
                position: 'absolute',
                top: '128px',
                left: '-12px',
                zIndex: 0,
              }}
            />
            <Typography
              position='relative'
              component='h1'
              fontSize='60px'
              fontWeight={700}
              lineHeight='60px'>
              Transform Your Productivity with Insights from the World’s Top Self-Help Books!
            </Typography>
          </Box>
          <Typography
            component='h2'
            fontSize='20px'
            fontWeight={700}
            lineHeight='28px'
            fontStyle='italic'>
            Join{' '}
            <span
              style={{
                textDecoration: 'underline',
              }}>
              Hoot & Hustle by ProcrastiNix
            </span>{' '}
            for exclusive, twice-weekly emails packed with wisdom, time management tips, and
            inspiration from bestsellers like Atomic Habits and Deep Work. Say goodbye to
            procrastination and hello to success—free to your inbox.
          </Typography>
          <Stack
            mt={1}
            direction='row'
            justifyContent='flex-start'
            alignItems='flex-start'
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
                      border: '2px solid #020304',
                      color: '#000',
                    },
                  },
                }}
              />
              <Typography fontStyle='italic' fontSize='15px'>
                Join 10,000+ happy readers worldwide.
              </Typography>
            </Stack>
            <CustomBtn variant='contained' size='large'>
              Subscribe for Free Now
            </CustomBtn>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
