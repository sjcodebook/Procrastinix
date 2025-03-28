import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import { useViewport } from '../hooks/useViewport'

import SeeMore from './common/SeeMore'

import WhiteHighlight from '../assets/white-highlight-2.svg'

const data = [
  {
    question: 'How long does it take to read each email?',
    answer: 'Each email is designed to be quick and actionable, taking about 5 minutes to read.',
  },
  {
    question: 'What kind of content can I expect?',
    answer:
      'You’ll receive a mix of motivational quotes, practical productivity tips, insights from top self-help books, fun facts, procrastination-busting strategies, and more!',
  },
  {
    question: 'Can I share the content with friends?',
    answer: 'Yes, feel free to share our emails with friends and encourage them to subscribe too!',
  },
  {
    question: 'Is my personal information safe?',
    answer: 'Absolutely. We value your privacy and never share your details with third parties.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'Nope! Hoot & Hustle is completely free, with no strings attached.',
  },
  {
    question: 'Can I unsubscribe at any time?',
    answer:
      'Yes, you can easily unsubscribe at any time with just one click. We make it hassle-free.',
  },
  {
    question: 'Do I need any prior knowledge to understand the content?',
    answer:
      'Not at all! Our emails are designed to be simple, engaging, and suitable for everyone, whether you’re a productivity novice or an expert.',
  },
  {
    question: 'How do I get the most out of Hoot & Hustle?',
    answer:
      'We recommend taking a few moments to reflect on each email’s tips and implementing one or two strategies that resonate with you.',
  },
  {
    question: 'What if I don’t find a topic useful?',
    answer:
      'Every email offers diverse content, so there’s something for everyone. If one topic doesn’t click, the next one likely will!',
  },
  {
    question: 'Can I suggest content ideas?',
    answer:
      'Yes! We love feedback from our community. Feel free to contact us via email with suggestions for future topics and we may feature them in upcoming emails.',
  },
  // {
  //   question: 'How do I access additional resources?',
  //   answer:
  //     'We sometimes include links to extra resources in our emails, and you can also explore our blog for more content on ProcrastiNix.com.',
  // },
]

export default function FaqComp() {
  const device = useViewport()

  return (
    <Box bgcolor='#9afd7f' width='100%' pt={4} pb={6}>
      <SeeMore maxHeight='680px' btnContent='See More FAQs'>
        <Stack
          justifyContent='center'
          alignItems='center'
          width='100%'
          maxWidth='1250px'
          mx='auto'
          gap={6}>
          <Box px={2} position='relative'>
            <img
              src={WhiteHighlight}
              width={250}
              style={{
                position: 'absolute',
                top: device === 'desktop' ? '25%' : device === 'tablet' ? '15%' : '12%',
                left: device === 'desktop' ? '63%' : '50%',
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
              Frequently Asked Questions
            </Typography>
          </Box>
          <Grid px={2} container spacing={2}>
            {data.map((item, index) => (
              <Grid key={item.question + index} size={12} justifyItems='center'>
                <Stack
                  py={2}
                  px={3}
                  justifyContent='center'
                  alignItems='flex-start'
                  border='2px solid #000001'
                  borderRadius='20px'
                  bgcolor='#fff'
                  gap={0.25}
                  width='100%'
                  maxWidth='850px'>
                  <Typography
                    component='h4'
                    fontSize={{
                      xs: '18px',
                      md: '24px',
                    }}
                    fontWeight={700}>
                    Q. {item.question}
                  </Typography>
                  <Typography
                    component='p'
                    fontSize={{
                      xs: '14px',
                      md: '18px',
                    }}
                    fontWeight={400}>
                    A. {item.answer}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </SeeMore>
    </Box>
  )
}
