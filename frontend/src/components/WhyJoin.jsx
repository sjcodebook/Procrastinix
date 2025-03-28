import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import { useViewport } from '../hooks/useViewport'

import WhiteHighlight from '../assets/white-highlight.svg'
import BookInfinity from '../assets/book-infinity-icon.svg'
import Bulb from '../assets/bulb-icon.svg'
import Check from '../assets/check-on-hand-icon.svg'
import Clock from '../assets/clock-icon.svg'
import Grow from '../assets/grow-bar-icon.svg'
import Happy from '../assets/happy-face-icon.svg'

const data = [
  {
    title: 'Conquer Procrastination',
    description: 'Proven strategies to overcome procrastination.',
    icon: Grow,
  },
  {
    title: 'Boost Productivity',
    description: 'Expert tips from top books like Atomic Habits, Deep Work etc.',
    icon: Clock,
  },
  {
    title: 'Daily Motivation',
    description: 'Inspirational quotes and life-changing advice.',
    icon: Check,
  },
  {
    title: 'Mental Well-Being',
    description: 'Practical tips for maintaining balance and mental health.',
    icon: Happy,
  },
  {
    title: 'Fun and Facts',
    description: 'Light-hearted content to keep your days interesting and engaging.',
    icon: BookInfinity,
  },
  {
    title: 'Exclusive Book Insights',
    description: "Key takeaways from the world's top self-help books.",
    icon: Bulb,
  },
]

export default function WhyJoin() {
  const device = useViewport()

  return (
    <Box bgcolor='#f6d7ff' width='100%' pt={4} pb={6}>
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
              top: device === 'desktop' ? '-38%' : device === 'tablet' ? '-55%' : '-25%',
              left: device === 'desktop' ? '38%' : '50%',
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
            Why Join Hoot & Hustle?
          </Typography>
        </Box>
        <Grid px={{ xs: 3, lg: 2 }} container spacing={{ xs: 3, lg: 4 }}>
          {data.map((item, index) => (
            <Grid zIndex={1} key={item.title + index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Stack
                px={1}
                py={2}
                justifyContent='center'
                alignItems='center'
                border='2px solid #000001'
                borderRadius='20px'
                gap={0.5}>
                <img src={item.icon} alt={item.title} width='80px' height='80px' />
                <Typography
                  component='h4'
                  fontSize='28px'
                  fontWeight={700}
                  textAlign='center'
                  sx={{
                    textDecoration: 'underline',
                  }}>
                  {item.title}
                </Typography>
                <Typography
                  component='p'
                  fontSize='18px'
                  fontWeight={400}
                  fontStyle='italic'
                  textAlign='center'
                  maxWidth='285px'>
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
