import firebase from '../firebase.js'
import { getFirestore, collection, addDoc, query, getDocs, where } from 'firebase/firestore'
import { isDisposableEmail, isValidEmail } from '../utils.js'

const db = getFirestore(firebase)

export const addHHSubscriberEmail = async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).send({
        message: 'Email is required',
      })
    }

    if (!isValidEmail(email)) {
      return res.status(400).send({
        message: 'Invalid email',
      })
    }

    if (isDisposableEmail(email)) {
      return res.status(400).send({
        message: 'Disposable email is not allowed',
      })
    }

    // Check if email already exists
    const subscribersRef = collection(db, 'hh_subscribers')
    const q = query(subscribersRef, where('email', '==', email))
    const subSnap = await getDocs(q)

    if (!subSnap.empty) {
      return res.status(400).send({
        message: 'Email already exists',
      })
    }

    const data = {
      email,
      createdAt: new Date().toISOString(),
      subscribed: true,
      subscribedAt: new Date().toISOString(),
      source: 'DIRECT_WEBSITE',
    }

    await addDoc(collection(db, 'hh_subscribers'), data)

    return res.status(200).send({
      message: 'Subscribed successfully',
    })
  } catch (error) {
    return res.status(400).send({
      message: 'Failed to subscribe',
      error,
    })
  }
}
