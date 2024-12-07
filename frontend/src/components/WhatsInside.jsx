import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import { useViewport } from '../hooks/useViewport'
import WhiteHighlight from '../assets/white-highlight-2.svg'

const data = [
  {
    title: 'Top Insights from Self-Help Leaders:',
    description: 'Exclusive lessons from Atomic Habits, Deep Work, and more.',
  },
  {
    title: 'Practical Time Management Hacks:',
    description: 'Tips to optimize your schedule and boost efficiency',
  },
  {
    title: 'Motivational and Inspiring Quotes:',
    description: 'Uplifting thoughts to keep you motivated.',
  },
  {
    title: 'Mindfulness and Focus Exercises:',
    description: 'Quick exercises for focus and reduced stress.',
  },
  {
    title: 'Engaging Fun Facts and Humor:',
    description: 'Light-hearted content to brighten your day.',
  },
  {
    title: 'Procrastination-Busting Challenges:',
    description: 'Engaging tasks to help you build better habits.',
  },
]

export default function WhatsInside() {
  const device = useViewport()

  return (
    <Box bgcolor='#9afd7f' width='100%' pt={4} pb={6}>
      <Stack
        justifyContent='center'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={6}>
        <Box px={1.5} position='relative'>
          <img
            src={WhiteHighlight}
            width={350}
            style={{
              position: 'absolute',
              top: device === 'desktop' ? '10.5%' : device === 'tablet' ? '1%' : '35%',
              left: device === 'desktop' ? '46.5%' : '50%',
              transform: device === 'desktop' ? 'none' : 'translateX(-50%)',
              zIndex: 0,
            }}
          />
          <Typography
            position='relative'
            component='h3'
            fontSize={{ xs: '44px', lg: '52px' }}
            fontWeight={700}
            lineHeight={{ xs: '48px', lg: '60px' }}
            textAlign='center'>
            What’s Inside Each Hoot & Hustle Email?
          </Typography>
        </Box>
        <Grid px={{ xs: 3, lg: 2 }} container spacing={{ xs: 3, lg: 4 }}>
          {data.map((item, index) => (
            <Grid key={item.title + index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Stack
                py={2}
                px={3}
                justifyContent='center'
                alignItems='flex-start'
                border='2px solid #000001'
                borderRadius='20px'
                bgcolor='#fff'
                gap={0.5}>
                <Typography
                  component='h4'
                  fontSize='26px'
                  fontWeight={700}
                  sx={{
                    textDecoration: 'underline',
                  }}>
                  {item.title}
                </Typography>
                <Typography component='p' fontSize='20px' fontWeight={400} fontStyle='italic'>
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  )
}
