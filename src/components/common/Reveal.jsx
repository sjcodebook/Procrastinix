import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useInView, useAnimation } from 'motion/react'

const Reveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
  })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.5,
          ease: 'easeIn',
        }}>
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal

Reveal.propTypes = {
  children: PropTypes.node,
}
