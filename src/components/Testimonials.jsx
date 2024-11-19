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
    backgroundColor: '#f6d7ff',
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

const TestimonialsGrid = () => {
  return (
    <Box bgcolor='#fff' width='100%' py={8}>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        width='100%'
        maxWidth='1250px'
        mx='auto'
        gap={10}>
        <Typography
          position='relative'
          component='h3'
          fontSize='52px'
          fontWeight={700}
          lineHeight='60px'
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
            <Grid key={item.text + index} size={4}>
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
                  fontSize='28px'
                  fontWeight={500}
                  color={item.color}
                  lineHeight='30px'>
                  {item.text}
                </Typography>
                <Typography component='p' fontSize='18px' fontWeight={500} color={item.color}>
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

export default TestimonialsGrid
