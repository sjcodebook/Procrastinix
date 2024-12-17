import firebase from './firebase.js'
import { getFirestore, getDoc, updateDoc, setDoc, doc } from 'firebase/firestore'

const db = getFirestore(firebase)

export const rateLimiter = async (req, res, next) => {
  console.log(req.headers)
  console.log(req.headers?.['x-forwarded-for'])
  console.log(req.headers?.['x-real-ip'])

  const userId = req.headers?.['x-forwarded-for'] ?? req.headers?.['x-real-ip'] ?? req.ip // Use user ID or IP address
  const maxRequests = 2 // Maximum number of requests
  const timeWindow = 60 * 1000 // Time window in milliseconds (e.g., 1 minute)

  const userRef = doc(db, 'rate_limits', userId)
  const userSnap = await getDoc(userRef)
  const now = Date.now()

  try {
    if (userSnap.exists()) {
      const data = userSnap.data()

      // Clean up old timestamps
      const updatedTimestamps = data.timestamps.filter((timestamp) => now - timestamp <= timeWindow)

      if (updatedTimestamps.length >= maxRequests) {
        return res.status(429).json({ message: 'Too many requests. Please try again later.' })
      }

      // Add the current request timestamp
      updatedTimestamps.push(now)
      await updateDoc(userRef, {
        timestamps: updatedTimestamps,
      })
    } else {
      // If the user doesn't exist, create a new entry
      await setDoc(userRef, {
        timestamps: [now],
      })
    }
    next()
  } catch (error) {
    console.error('Error in rate limiter:', error)
    return res.status(500).json({ message: 'Internal server error.' })
  }
}
