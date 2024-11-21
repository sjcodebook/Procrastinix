import { useState } from 'react'
import PropTypes from 'prop-types'

const SeeMore = ({ children, maxHeight = '500px', btnContent = 'See More' }) => {
  const [showFull, setShowFull] = useState(false)

  return (
    <div
      style={{
        width: '100%',
      }}>
      <div
        style={{
          width: '100%',
          maxHeight: showFull ? '10000px' : maxHeight,
          height: showFull ? 'auto' : maxHeight,
          overflow: 'hidden',
          transition: 'max-height 2s ease-in',
        }}>
        {children}
      </div>
      <div
        style={{
          display: showFull ? 'none' : 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '20px',
          marginBottom: '-20px',
        }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#fff',
            border: '2px solid #000001',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
          onClick={() => setShowFull(true)}>
          {btnContent}
        </button>
      </div>
    </div>
  )
}

export default SeeMore

SeeMore.propTypes = {
  children: PropTypes.node,
  maxHeight: PropTypes.string,
  btnContent: PropTypes.string,
}
