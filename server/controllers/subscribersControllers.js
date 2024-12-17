import axios from 'axios'

import firebase from '../firebase.js'
import { getFirestore, collection, addDoc, query, getDocs, where } from 'firebase/firestore'
import { isDisposableEmail, isValidEmail } from '../utils.js'

const db = getFirestore(firebase)

export const addHHSubscriberEmail = async (req, res) => {
  try {
    const { email, originSource = 'NONE' } = req.body

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

    const trimmedEmail = email.trim().toLowerCase()

    // Check if email already exists
    const subscribersRef = collection(db, 'hh_subscribers')
    const q = query(subscribersRef, where('email', '==', trimmedEmail))
    const subSnap = await getDocs(q)

    if (!subSnap.empty) {
      return res.status(400).send({
        message: 'Email already exists',
      })
    }

    const data = {
      email: trimmedEmail,
      createdAt: new Date(),
      subscribed: true,
      subscribedAt: new Date(),
      source: 'DIRECT_WEBSITE',
      originSource,
    }

    await addDoc(collection(db, 'hh_subscribers'), data)

    // Subscribe email to brevo

    const brevoData = {
      email: trimmedEmail,
      listIds: [7],
      attributes: {
        SOURCE: 'DIRECT_WEBSITE',
        ORIGIN_SOURCE: originSource,
      },
    }

    await axios.post(`${process.env.BREVO_API_ENDPOINT}/contacts`, brevoData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
    })

    return res.status(200).send({
      message: 'Subscribed successfully',
    })
  } catch (error) {
    console.error('Failed to subscribe:', error)
    return res.status(400).send({
      message: 'Failed to subscribe',
      error,
    })
  }
}
