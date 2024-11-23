import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const testimonials = [
  {
    text: 'Hoot & Hustle is my secret weapon for staying productive. Every email is packed with value!',
    author: 'Alex P.',
    backgroundColor: '#000001',
    color: '#fff',
  },
  {
    text: "I look forward to every Nix email—it's a perfect blend of wisdom and fun.",
    author: 'Taylor L',
    backgroundColor: '#9afd7f',
    color: '#000001',
  },
  {
    text: 'These insights have transformed how I approach my day!',
    author: 'Emma W.',
    backgroundColor: '#000001',
    color: '#fff',
  },
  {
    text: 'Since joining Hoot & Hustle, my productivity has improved immensely. The insights are practical and fun to read!',
    author: 'Michael T.',
    backgroundColor: '#9afd7f',
    color: '#000001',
  },
  {
    text: 'I didn’t think a free newsletter could be so impactful. Each email is like a mini productivity boost!',
    author: 'Sofia L.',
    backgroundColor: '#000001',
    color: '#fff',
  },
  {
    text: 'Nix’s weekly wisdom helps me stay focused and motivated. Highly recommend it to anyone who struggles with procrastination!',
    author: 'Liam R.',
    backgroundColor: '#9afd7f',
    color: '#000001',
  },
]

const Testimonials = () => {
  return (
    <Box bgcolor='#f6d7ff' width='100%' py={8}>
      <Stack
        px={{ xs: 2, md: 4, lg: 0 }}
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={{ xs: 4, md: 6, lg: 8 }}>
        <Typography
          position='sticky'
          top='50px'
          component='h3'
          fontSize={{ xs: '44px', lg: '52px' }}
          fontWeight={700}
          lineHeight={{ xs: '48px', lg: '60px' }}
          maxHeight='max-content'
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'sideways',
            transform: 'rotate(180deg)',
          }}>
          What Our Readers Say
        </Typography>
        <Grid container spacing={2}>
          {testimonials.map((item, index) => (
            <Grid key={item.text + index} size={{ xs: 12, md: 4 }}>
              <Stack
                height='350px'
                py={2}
                px={4}
                justifyContent='center'
                alignItems='flex-start'
                bgcolor={item.backgroundColor}
                gap={2}>
                <Typography
                  component='h4'
                  fontSize={{
                    xs: '24px',
                    md: '28px',
                  }}
                  fontWeight={500}
                  color={item.color}
                  lineHeight={{
                    xs: '28px',
                    md: '32px',
                  }}>
                  {item.text}
                </Typography>
                <Typography
                  component='p'
                  fontSize={{
                    xs: '14px',
                    md: '18px',
                  }}
                  fontWeight={500}
                  color={item.color}>
                  - {item.author}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  )
}

export default Testimonials
